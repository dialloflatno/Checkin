class UserSerializer < ActiveModel::Serializer
  attributes :full_name, :email, :phone_number

  has_many :students
  has_many :teachers
end
