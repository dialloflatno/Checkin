class User < ApplicationRecord
  has_secure_password

  has_many :students
  has_many :teachers

  validates :full_name, presence: true
  validates :email, presence: true, uniqueness: true
  validates :phone_number, length: { is: 10 }, uniqueness: true
  # validates :password, presence: true, uniqueness: true, length: { in: 6..15 }
end
