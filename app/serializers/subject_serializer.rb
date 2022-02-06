class SubjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :teacher
  
  belongs_to :teacher
  belongs_to :location
end
