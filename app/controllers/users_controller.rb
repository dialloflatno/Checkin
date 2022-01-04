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
end
