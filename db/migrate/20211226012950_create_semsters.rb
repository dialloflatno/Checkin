class CreateSemsters < ActiveRecord::Migration[7.0]
  def change
    create_table :semsters do |t|
      t.string :semster
      t.integer :year
      t.references :schedule

      t.timestamps
    end
  end
end
