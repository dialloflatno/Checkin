class CreateSemsters < ActiveRecord::Migration[6.1]
  def change
    create_table :semsters do |t|
      t.string :semster
      t.integer :year
      t.references :schedule

      t.timestamps
    end
  end
end
