@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Event Ticket</div>

                <div class="card-body">
                    <div class="text-center mb-4">
                        <h2>{{ $event->event_name }}</h2>
                        <p class="lead">{{ $event->event_date->format('F j, Y') }} at {{ $event->event_time->format('g:i A') }}</p>
                        <p>{{ $event->location }}</p>
                    </div>

                    <div class="ticket-details">
                        <div class="row mb-3">
                            <div class="col-md-4">
                                <strong>Attendee:</strong>
                            </div>
                            <div class="col-md-8">
                                {{ $decodedName }}
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col-md-4">
                                <strong>Ticket ID:</strong>
                            </div>
                            <div class="col-md-8">
                                {{ $event->ticket_prefix }}-{{ str_pad($event->event_id, 4, '0', STR_PAD_LEFT) }}-{{ substr(md5($decodedName), 0, 6) }}
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col-md-4">
                                <strong>Date:</strong>
                            </div>
                            <div class="col-md-8">
                                {{ $event->event_date->format('F j, Y') }}
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col-md-4">
                                <strong>Time:</strong>
                            </div>
                            <div class="col-md-8">
                                {{ $event->event_time->format('g:i A') }}
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col-md-4">
                                <strong>Location:</strong>
                            </div>
                            <div class="col-md-8">
                                {{ $event->location }}
                            </div>
                        </div>
                    </div>

                    <div class="text-center mt-4">
                        <button onclick="window.print()" class="btn btn-primary">Print Ticket</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
@media print {
    .btn-primary {
        display: none;
    }
    .card {
        border: none;
    }
    .card-header {
        background: none;
        border: none;
    }
}
</style>
@endsection 