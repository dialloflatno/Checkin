class Schedule < ApplicationRecord
    belongs_to :student
    has_many :periods
    has_many :subjects , through: :periods
end
