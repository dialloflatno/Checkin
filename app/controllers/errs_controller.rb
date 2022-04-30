class ErrsController < ApplicationController
  def index
    errs = Err.all
    render json: errs, status: :ok
  end

  def create 
    e_request = Err.create(err_params)
    render json: e_request, status: :ok
  end

end

private

def err_params
  params.permit(:emergency, :student_id, :location_id)
end
