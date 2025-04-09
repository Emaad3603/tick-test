<?php
use App\Models\Event;
use Illuminate\Http\Request;

class EventController extends Controller
{
    public function index()
    {
        return Event::orderBy('event_date')->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'event_name' => 'required|string',
            'event_date' => 'required|date',
            'event_time' => 'required',
            'location' => 'required|string',
            'ticket_prefix' => 'required|string|size:4'
        ]);

        Event::create($request->all());
        return response()->json(['message' => 'Event added successfully.']);
    }

    public function update(Request $request, $id)
    {
        $event = Event::findOrFail($id);
        $event->update($request->all());

        return response()->json(['message' => 'Event updated successfully.']);
    }

    public function destroy($id)
    {
        Event::destroy($id);
        return response()->json(['message' => 'Event deleted successfully.']);
    }
}
?>