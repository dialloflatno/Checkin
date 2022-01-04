class StudentsController < ApplicationController

    def index
        students = Student.all
        render json: students.to_json(except: [:password, :created_at, :updated_at]) , status: :ok
     end


     
end
