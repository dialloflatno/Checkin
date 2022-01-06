class ChangeIntegerInTeacher < ActiveRecord::Migration[6.1]
  def change
    change_column :teachers, :teacher_school_id, :integer, limit: 8
  end
end
