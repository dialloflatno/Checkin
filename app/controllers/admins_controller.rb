class AdminsController < ApplicationController

    def index 
        admins = User.all.where(admin: true) 
        render json: admins , status: :ok
    end

    def show 
        user = User.find_by(id: params[:id])
        admin_status = user.admin
        render json: admin_status , status: :ok
    end

    def set_teacher
        user = User.find_by(id: params[:id])
        teacher_set = user.update(teacher_reg_params)
        render json: teacher_set 
    end

    def set_student
        user = User.find_by(id: params[:id])
        student_set = user.update(stud_reg_params)
        render json: student_set 
    end

    def create_teacher
        reg_teacher = Teacher.create(teacher_params)
        if reg_teacher
          render json: reg_teacher, status: :created
        else
          render json: { error: 'validation error' }, status: :unprocessable_entity
        end
    end



    def create_student

      reg_student = Student.create(student_params)
      if reg_student
        render json: reg_student, status: :created
      else
        render json: { error: 'validation error' }, status: :unprocessable_entity
      end

    end

    # def remove_teacher 
    # end

    # def remove_student 
    # end

end

private 

    def student_params
        params.permit(:student_id, :user_id, :student_school_id)
    end
    
    def teacher_params
        params.permit(:teacher_school_id, :school_id, :user_id, :school_authorization_code )
    end

    def user_params
      params.permit(:id, :student,:teacher,:admin)
    end

    def stud_reg_params
      params.permit(:student)
    end

    def teacher_reg_params
      params.permit(:teacher)
    end