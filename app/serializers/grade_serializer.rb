class GradeSerializer < ActiveModel::Serializer
  attributes :id, :grade, :comment, :teacher, :student
  belongs_to :teacher
  belongs_to :student
end
