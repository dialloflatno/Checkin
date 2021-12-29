class Period < ApplicationRecord
    belongs_to :schedule
    belongs_to :subject
end
