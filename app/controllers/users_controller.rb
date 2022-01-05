class UsersController < ApplicationController
  def index
    us = User.all
    render json:
             us.to_json(except: %i[user_name password created_at updated_at]),
           status: :ok
  end

  def show
    user = User.find(session[:user_id])
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

  private

  def user_params
    params.permit(:full_name, :password, :username, :email, :phone_number, :DOB)
  end
end
