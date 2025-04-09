<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Maatwebsite\Excel\Facades\Excel;
use App\Imports\EventContactsImport;

class EventController extends Controller
{
    public function index()
    {
        $events = Event::orderBy('event_date', 'desc')->get();
        return view('events.index', compact('events'));
    }

    public function create()
    {
        return view('events.create');
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'event_name' => 'required|string|max:255',
            'event_date' => 'required|date',
            'event_time' => 'required',
            'location' => 'required|string|max:255',
            'ticket_prefix' => 'required|string|max:4',
        ]);

        if ($validator->fails()) {
            return redirect()->back()
                ->withErrors($validator)
                ->withInput();
        }

        Event::create($request->all());

        return redirect()->route('events.index')
            ->with('success', 'Event created successfully.');
    }

    public function edit(Event $event)
    {
        return view('events.edit', compact('event'));
    }

    public function update(Request $request, Event $event)
    {
        $validator = Validator::make($request->all(), [
            'event_name' => 'required|string|max:255',
            'event_date' => 'required|date',
            'event_time' => 'required',
            'location' => 'required|string|max:255',
            'ticket_prefix' => 'required|string|max:4',
        ]);

        if ($validator->fails()) {
            return redirect()->back()
                ->withErrors($validator)
                ->withInput();
        }

        $event->update($request->all());

        return redirect()->route('events.index')
            ->with('success', 'Event updated successfully.');
    }

    public function destroy(Event $event)
    {
        $event->delete();

        return redirect()->route('events.index')
            ->with('success', 'Event deleted successfully.');
    }

    public function importContacts(Request $request, Event $event)
    {
        $request->validate([
            'contacts_file' => 'required|mimes:xlsx,xls',
        ]);

        Excel::import(new EventContactsImport($event), $request->file('contacts_file'));

        return redirect()->route('events.show', $event)
            ->with('success', 'Contacts imported successfully.');
    }

    public function showTicket($eventId, $encodedName)
    {
        $event = Event::findOrFail($eventId);
        $decodedName = base64_decode($encodedName);
        
        return view('events.ticket', compact('event', 'decodedName'));
    }
} 