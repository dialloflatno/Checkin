class TeachersController < ApplicationController
    def index
        teachers = Teacher.all
        render json: teachers.to_json(except: [:password, :created_at, :updated_at]) , status: :ok
     end

end
