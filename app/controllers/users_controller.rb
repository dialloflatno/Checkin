class UsersController < ApplicationController
  def index
    us = User.all
    render json:
             us.to_json(except: %i[username password created_at updated_at]),
           status: :ok
  end

  def show
    user = User.find_by(id: session[:user_id])
    session[:user_id] = user.id
    render json: user
  end

  def create
    user = User.create(user_params)
    if user
      render json: user, status: :created
    else
      render json: { error: 'validation error' }, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.permit(
      :full_name,
      :username,
      :email,
      :phone_number,
      :password,
      :password_confirmation,
      :DOB,
      :admin,
      :state,
      :school,
      :IDNUMBER,
      :teacher,
      :student,
    )
  end
end
