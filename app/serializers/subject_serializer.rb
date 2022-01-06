class SubjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :teacher, :location

  belongs_to :teacher
  belongs_to :location
end
