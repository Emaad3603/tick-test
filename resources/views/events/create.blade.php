@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Create Event</div>

                <div class="card-body">
                    <form method="POST" action="{{ route('events.store') }}">
                        @csrf

                        <div class="form-group row mb-3">
                            <label for="event_name" class="col-md-4 col-form-label text-md-right">Event Name</label>
                            <div class="col-md-6">
                                <input id="event_name" type="text" class="form-control @error('event_name') is-invalid @enderror" name="event_name" value="{{ old('event_name') }}" required>
                                @error('event_name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row mb-3">
                            <label for="event_date" class="col-md-4 col-form-label text-md-right">Event Date</label>
                            <div class="col-md-6">
                                <input id="event_date" type="date" class="form-control @error('event_date') is-invalid @enderror" name="event_date" value="{{ old('event_date') }}" required>
                                @error('event_date')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row mb-3">
                            <label for="event_time" class="col-md-4 col-form-label text-md-right">Event Time</label>
                            <div class="col-md-6">
                                <input id="event_time" type="time" class="form-control @error('event_time') is-invalid @enderror" name="event_time" value="{{ old('event_time') }}" required>
                                @error('event_time')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row mb-3">
                            <label for="location" class="col-md-4 col-form-label text-md-right">Location</label>
                            <div class="col-md-6">
                                <input id="location" type="text" class="form-control @error('location') is-invalid @enderror" name="location" value="{{ old('location') }}" required>
                                @error('location')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row mb-3">
                            <label for="ticket_prefix" class="col-md-4 col-form-label text-md-right">Ticket Prefix</label>
                            <div class="col-md-6">
                                <input id="ticket_prefix" type="text" class="form-control @error('ticket_prefix') is-invalid @enderror" name="ticket_prefix" value="{{ old('ticket_prefix') }}" maxlength="4" required>
                                @error('ticket_prefix')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    Create Event
                                </button>
                                <a href="{{ route('events.index') }}" class="btn btn-secondary">Cancel</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection 