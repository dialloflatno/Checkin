class UserSerializer < ActiveModel::Serializer
  attributes :id ,:full_name, :email, :phone_number, :teacher, :student

  has_many :students
  has_many :teachers
end
