class CreateTeachers < ActiveRecord::Migration[6.1]
  def change
    create_table :teachers do |t|
      t.integer :school_authorization_code
      t.integer :teacher_school_id
      t.references :user, :school

      t.timestamps
    end
  end
end
