class UserSerializer < ActiveModel::Serializer
  attributes :first_name, :last_name, :email, :phone_number

  has_many :students
  has_many :teachers
end
