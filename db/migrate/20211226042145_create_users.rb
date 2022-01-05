class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :full_name
      t.string :email
      t.integer :phone_number
      t.string :DOB
      t.string :username
      t.string :password
      
      t.timestamps
    end
  end
end
