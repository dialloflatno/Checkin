class SchoolSerializer < ActiveModel::Serializer
  attributes :name, :address

  has_many :teachers
  has_many :students
end
