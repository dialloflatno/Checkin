class SchedulesController < ApplicationController
    def index
        schedules = Schedule.all
        render json: schedules.to_json(except: [:password, :created_at, :updated_at]) , status: :ok
     end


end
