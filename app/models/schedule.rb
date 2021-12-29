class Schedule < ApplicationRecord
    belongs_to :student
    has_many :periods
end
