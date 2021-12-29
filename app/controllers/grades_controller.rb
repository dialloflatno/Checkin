class GradesController < ApplicationController

    def index
        grades = Grade.all
        render json: grades, status: :ok
    end

    def show
        student = Student.find_by!(id: params[:id])
        student_grade = student.grades
        render json: student_grade.to_json(except: [:password, :created_at, :updated_at]) , status: :ok
     end

end
