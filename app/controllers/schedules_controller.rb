class SchedulesController < ApplicationController
    def show 
        user = User.find_by(username: params[:username])
        user_schedule = user.schedules
        render json: user_schedule.to_json(except: [:password, :created_at, :updated_at]) , status: :ok
     end
     

end
