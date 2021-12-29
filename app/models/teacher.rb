class Teacher < ApplicationRecord
    belongs_to :school
    belongs_to :user
    has_many :subjects
    has_many :grades
    has_many :students , through: :grades
end
