class ChangeIntegerLimitInStudents < ActiveRecord::Migration[6.1]
  def change
    change_column :students, :student_school_id, :integer, limit: 8
  end
end
