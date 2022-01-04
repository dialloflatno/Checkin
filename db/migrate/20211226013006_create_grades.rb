class CreateGrades < ActiveRecord::Migration[6.1]
  def change
    create_table :grades do |t|
      t.integer :grade
      t.string :comment
      t.references :teacher, :student

      t.timestamps
    end
  end
end
