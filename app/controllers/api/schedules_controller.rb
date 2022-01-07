class Api::SchedulesController < ApplicationController
  def index
    schedules = Schedule.all
    render json: schedules, status: :ok
  end

  def show
    student = Student.find_by!(id: params[:id])
    user_schedule = student.schedules
    render json:
             user_schedule.to_json(except: %i[password created_at updated_at]),
           status: :ok
  end
end
