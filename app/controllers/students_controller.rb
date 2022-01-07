class StudentsController < ApplicationController
  def index
    students = Student.all
    render json: students.to_json(except: %i[password created_at updated_at]),
           status: :ok
  end

  def show
    student = Student.find_by(id: params[:id])
    render json: student
  end

  def update
    student = Student.find_by(id: params[:id])
    new_student = student.update(student_params)
    render json: new_student
  end
end

private

def student_params
  params.permit(:student_id, :user_id, :student_school_id)
end
