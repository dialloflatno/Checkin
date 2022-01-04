class TeacherSerializer < ActiveModel::Serializer
  attributes :user, :school, :teacher_school_id

  belongs_to :school
  belongs_to :user
  has_many :subjects
  has_many :grades
  has_many :students, through: :grades
end
