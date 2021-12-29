class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.string :title
      t.string :planner
      t.datetime :time
      t.datetime :date
      t.references :location

      t.timestamps
    end
  end
end
  