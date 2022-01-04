class CreateStudents < ActiveRecord::Migration[6.1]
  def change
    create_table :students do |t|
      t.references :school, :user
      t.integer :student_school_id
      t.timestamps
    end
  end
end
