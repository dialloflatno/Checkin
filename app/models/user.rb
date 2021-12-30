class User < ApplicationRecord
  has_many :students
  has_many :teachers

  validates :first_name, :last_name, presence: true
  validates :email, presence: true, uniqueness: true
  validates :phone_number, length: { is: 10 }, uniqueness: true
  validates :user_name, presence: true, uniqueness: true
  validates :password, presence: true, uniqueness: true, length: { in: 6..15 }
end

User.create(
    first_name: 'Dan',
    last_name: 'Mithcell',
    email: '12jkd3@gmail.com',
    phone_number: 130293390,
    user_name: 'dan_usermchill',
    password: 'm0ney123',
  )
User.create(
    first_name: 'Dan',
    last_name: 'Mithcell',
    email: '12jkd3@gmail.com',
    phone_number: 1030293390,
    user_name: 'dan_usermchill',
    password: 'm0ney123',
  )
User.create(
    first_name: 'Dan',
    last_name: 'Mithcell',
    email: '12jkd3@gmail.com',
    phone_number: 1030293390,
    user_name: 'dan_usermchill',
    password: 'm0ney123jfkd;ajfkd;ajfdk;ajfkd;lajfkd;alfjkd;a',
  )
User.create(
    first_name: 'Dan',
    last_name: 'Mithcell',
    email: '12jkd3@gmail.com',
    phone_number: 1030293390,
    user_name: 'dan_usermchill',
    password: 'm0',
  )