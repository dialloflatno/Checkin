class EventsController < ApplicationController
  def index
    events = Event.all
    render json: events, status: :ok
  end

  def create 
    event = Event.create(event_params)
      if event
        render json: event, status: :created
      else
        render json: { error: 'validation error' }, status: unprocessable_entity
      end
  end

  private

  def event_params
    params.permit(:title, :planner, :time, :date, :location_id)
  end
end
