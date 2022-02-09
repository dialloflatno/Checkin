class Subject < ApplicationRecord
    belongs_to :teacher
    belongs_to :location
    belongs_to :student
    has_many :periods
    has_many :schedules , through: :periods
end
