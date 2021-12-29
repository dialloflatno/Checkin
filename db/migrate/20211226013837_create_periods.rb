class CreatePeriods < ActiveRecord::Migration[7.0]
  def change
    create_table :periods do |t|
      t.references :subject, :schedule
      t.integer :start_time
      t.integer :end_time
      

      t.timestamps
    end
  end
end
