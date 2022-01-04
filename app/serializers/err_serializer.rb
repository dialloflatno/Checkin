class ErrSerializer < ActiveModel::Serializer
  attributes :id, :emergency, :student, :location
  belongs_to :location
  belongs_to :student
end
