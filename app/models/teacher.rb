class Teacher < ApplicationRecord
  belongs_to :school
  belongs_to :user
  has_many :subjects
  has_many :grades
  has_many :students, through: :grades

  validates :school_authorization_code, presence: true
  validates :teacher_school_id, presence: true, uniqueness: true
end
