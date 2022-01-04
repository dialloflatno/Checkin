class CreateSchedules < ActiveRecord::Migration[6.1]
  def change
    create_table :schedules do |t|
      t.references :student, :period
      t.integer :period_second
      t.integer :period_thrid
      t.integer :period_fourth
      t.integer :period_fifth

      t.timestamps
    end
  end
end
