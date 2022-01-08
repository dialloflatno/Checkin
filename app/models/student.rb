class Student < ApplicationRecord
  belongs_to :school
  belongs_to :user
  has_many :schedules
  has_many :errs
  has_many :grades
  has_many :teachers, through: :grades

  validates :student_school_id, presence: true, uniqueness: true

  validates :user_id, presence: true, uniqueness: true
  validates :school_id, presence: true
end

Student.create(
  user_id: 11,
  school_id: 0,
  student_school_id: 9_833_892_089089999999999999939,
)
