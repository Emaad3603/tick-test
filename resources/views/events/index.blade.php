@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h5 class="mb-0">Events</h5>
                    <a href="{{ route('events.create') }}" class="btn btn-primary">Create Event</a>
                </div>

                <div class="card-body">
                    @if (session('success'))
                        <div class="alert alert-success" role="alert">
                            {{ session('success') }}
                        </div>
                    @endif

                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Event Name</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Location</th>
                                    <th>Ticket Prefix</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach($events as $event)
                                    <tr>
                                        <td>{{ $event->event_name }}</td>
                                        <td>{{ $event->event_date->format('Y-m-d') }}</td>
                                        <td>{{ $event->event_time->format('H:i') }}</td>
                                        <td>{{ $event->location }}</td>
                                        <td>{{ $event->ticket_prefix }}</td>
                                        <td>
                                            <a href="{{ route('events.edit', $event) }}" class="btn btn-sm btn-primary">Edit</a>
                                            <form action="{{ route('events.destroy', $event) }}" method="POST" class="d-inline">
                                                @csrf
                                                @method('DELETE')
                                                <button type="submit" class="btn btn-sm btn-danger" onclick="return confirm('Are you sure?')">Delete</button>
                                            </form>
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection 