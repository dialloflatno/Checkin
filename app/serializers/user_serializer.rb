class UserSerializer < ActiveModel::Serializer
  attributes :id ,:full_name, :email, :phone_number, :admin

  has_many :students
  has_many :teachers
end
