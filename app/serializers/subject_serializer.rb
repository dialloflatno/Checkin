class SubjectSerializer < ActiveModel::Serializer
  attributes :name, :teacher, :location

  belongs_to :teacher
  belongs_to :location
end
