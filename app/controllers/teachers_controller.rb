class TeachersController < ApplicationController
  def index
    teachers = Teacher.all
    render json:
             teachers.to_json(
               except: %i[user_name password created_at updated_at],
             ),
           status: :ok
  end
end
