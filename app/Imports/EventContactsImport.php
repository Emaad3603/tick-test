<?php

namespace App\Imports;

use App\Models\Event;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithValidation;

class EventContactsImport implements ToModel, WithHeadingRow, WithValidation
{
    protected $event;

    public function __construct(Event $event)
    {
        $this->event = $event;
    }

    public function model(array $row)
    {
        // Generate ticket URL for the contact
        $ticketUrl = $this->event->generateTicketUrl($row['first_name'], $row['last_name']);
        
        // Here you would typically save the contact to your contacts table
        // and associate it with the event
        // This is just a placeholder - implement according to your contact model
        return [
            'first_name' => $row['first_name'],
            'last_name' => $row['last_name'],
            'ticket_url' => $ticketUrl,
            'event_id' => $this->event->event_id,
        ];
    }

    public function rules(): array
    {
        return [
            'first_name' => 'required',
            'last_name' => 'required',
        ];
    }
} 