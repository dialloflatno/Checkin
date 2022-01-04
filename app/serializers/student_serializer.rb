class StudentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :school_id, :student_school_id

  belongs_to :school
  belongs_to :user
  has_many :schedules
  has_many :errs
  has_many :grades
  has_many :teachers, through: :grades
end
