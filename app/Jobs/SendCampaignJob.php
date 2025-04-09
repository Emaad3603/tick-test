<?php

namespace App\Jobs;

use Carbon\Carbon;
use App\Models\Campaign;
use App\Models\CampaignLog;
use App\Models\Contact;
use App\Models\Organization;
use App\Models\Setting;
use App\Services\WhatsappService;
use App\Traits\HasUuid;
use App\Traits\TemplateTrait;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class SendCampaignJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, TemplateTrait, SerializesModels;

    private $organizationId;
    private $whatsappService;
    private $batchSize;

    public function handle()
    {
        try {
            /*$timezoneQuery = Setting::where('key', 'timezone')->first();
            $timezone = $timezoneQuery ? $timezoneQuery->value : 'UTC';*/

            $campaigns = Campaign::whereIn('status', ['scheduled', 'ongoing'])
                ->with('organization') // Eager load the organization relationship
                ->whereNull('deleted_at')
                ->cursor();

            $campaigns->each(function ($campaign) {
                $organization = $campaign->organization;
                $timezone = 'UTC';

                if ($organization) {
                    $metadata = $organization->metadata;
                    $metadata = isset($metadata) ? json_decode($metadata, true) : null;

                    if ($metadata && isset($metadata['timezone'])) {
                        $timezone = $metadata['timezone'];
                    }
                }

                $scheduledAt = Carbon::parse($campaign->scheduled_at, 'UTC')->timezone($timezone);

                // Compare the scheduled_at time with the current time in the organization's timezone
                if ($scheduledAt->lte(Carbon::now($timezone))) {
                    $this->processCampaign($campaign);
                }
            });
        } catch (\Exception $e) {
            // Handle the exception, log it, or take other actions
            Log::error('Error in campaign job: ' . $e->getMessage());

            // Optionally, rethrow the exception if you want the job to be retried
            throw $e;
        }
    }

    protected function processCampaign(Campaign $campaign)
    {
        if ($campaign->status === 'scheduled') {
            $this->processPendingCampaign($campaign);
        } elseif ($campaign->status === 'ongoing') {
            $this->sendOngoingCampaignMessages($campaign);
        }
    }

    protected function processPendingCampaign(Campaign $campaign)
    {
        $contacts = $this->getContactsForCampaign($campaign);

        if($this->createCampaignLogs($campaign, $contacts)){
            if($this->updateCampaignStatus($campaign, 'ongoing')){
                $campaign = Campaign::find($campaign->id);
                $this->processCampaign($campaign);
            }
        }
    }

    protected function getContactsForCampaign(Campaign $campaign)
    {
        $contactGroup = $campaign->contactGroup;

        return (is_null($campaign->contact_group_id) || empty($campaign->contact_group_id) || $campaign->contact_group_id === '0')
            ? Contact::where('organization_id', $campaign->organization_id)->whereNull('deleted_at')->get()
            : optional($contactGroup)->contacts ?? collect();
    }

    protected function createCampaignLogs(Campaign $campaign, $contacts)
    {
        $campaignLogs = [];
        $contactIds = $contacts->pluck('id');

        // Fetch existing logs
        $existingLogs = CampaignLog::where('campaign_id', $campaign->id)
            ->whereIn('contact_id', $contactIds)
            ->pluck('contact_id')
            ->toArray();

        // Filter out contacts that already have logs
        $newContacts = $contactIds->diff($existingLogs);

        // Prepare new campaign logs
        $campaignLogs = $newContacts->map(function ($contactId) use ($campaign) {
            return [
                'campaign_id' => $campaign->id,
                'contact_id' => $contactId,
                'created_at' => now(),
            ];
        })->toArray();

        // Insert new logs if any
        if (!empty($campaignLogs)) {
            return CampaignLog::insert($campaignLogs);
        }

        return false;
    }

    protected function updateCampaignStatus(Campaign $campaign, $status)
    {
        return Campaign::where('uuid', $campaign->uuid)->update(['status' => $status]);
    }

    protected function sendOngoingCampaignMessages(Campaign $campaign)
    {
        $this->processPendingCampaignLogs($campaign);

        // Check if there are no more pending campaign logs
        if (!$this->hasPendingCampaignLogs($campaign)) {
            $this->updateCampaignStatus($campaign, 'completed');
        }
    }

    protected function processPendingCampaignLogs(Campaign $campaign)
    {
        $pendingLogs = CampaignLog::where('campaign_id', $campaign->id)
            ->where('status', 'pending')
            ->with('contact')
            ->limit($this->batchSize)
            ->get();

        foreach ($pendingLogs as $log) {
            try {
                $contact = $log->contact;
                $metadata = json_decode($campaign->metadata, true);
                
                // Generate dynamic ticket URL
                $ticketUrl = route('api.ticket.generate', [
                    'ticket_id' => $metadata['ticket_prefix'] . '-' . substr(preg_replace('/[^0-9]/', '', $contact->phone), -6) . '-' . time(),
                    'contact' => $contact->uuid,
                    'campaign' => $campaign->uuid
                ]);
                
                // Replace any static ticket URL in the template with the dynamic one
                if (isset($metadata['buttons'])) {
                    foreach ($metadata['buttons'] as &$button) {
                        if (isset($button['parameters'])) {
                            foreach ($button['parameters'] as &$param) {
                                if (strpos($param['value'], 'ticket_url') !== false) {
                                    $param['value'] = $ticketUrl;
                                }
                            }
                        }
                    }
                }
                
                $this->whatsappService->sendTemplate($contact->uuid, $campaign->template_id, $metadata);
                $log->update(['status' => 'sent']);
            } catch (\Exception $e) {
                $log->update(['status' => 'failed', 'error' => $e->getMessage()]);
            }
        }
    }

    protected function hasPendingCampaignLogs(Campaign $campaign)
    {
        return CampaignLog::where('status', 'pending')
            ->where('campaign_id', $campaign->id)
            ->exists();
    }

    private function initializeWhatsappService()
    {
        $config = Organization::where('id', $this->organizationId)->first()->metadata;
        $config = $config ? json_decode($config, true) : [];

        $accessToken = $config['whatsapp']['access_token'] ?? null;
        $apiVersion = 'v18.0';
        $appId = $config['whatsapp']['app_id'] ?? null;
        $phoneNumberId = $config['whatsapp']['phone_number_id'] ?? null;
        $wabaId = $config['whatsapp']['waba_id'] ?? null;

        $this->whatsappService = new WhatsappService($accessToken, $apiVersion, $appId, $phoneNumberId, $wabaId, $this->organizationId);
    }
}
