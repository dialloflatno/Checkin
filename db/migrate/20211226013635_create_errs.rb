class CreateErrs < ActiveRecord::Migration[7.0]
  def change
    create_table :errs do |t|
      t.references :student, :location
      t.text :emergency

      t.timestamps
    end
  end
end
