class Student < ApplicationRecord
    belongs_to :school
    belongs_to :user
    has_many :schedules
    has_many :errs
    has_many :grades
    has_many :teachers, through: :grades
end
