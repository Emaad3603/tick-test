<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    protected $primaryKey = 'event_id';

    protected $fillable = [
        'event_name',
        'event_date',
        'event_time',
        'location',
        'ticket_prefix'
    ];

    protected $casts = [
        'event_date' => 'date',
        'event_time' => 'datetime:H:i:s',
    ];

    public function generateTicketUrl($firstName, $lastName)
    {
        $encodedName = base64_encode($firstName . ' ' . $lastName);
        return route('event.ticket', [
            'event' => $this->event_id,
            'name' => $encodedName
        ]);
    }
} 