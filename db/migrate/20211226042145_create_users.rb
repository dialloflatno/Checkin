class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :full_name
      t.string :email
      t.integer :phone_number
      t.string :DOB
      t.string :username
      t.string :state
      t.string :school
      t.integer :IDNUMBER
      t.string :password_digest
      
      t.timestamps
    end
  end
end
