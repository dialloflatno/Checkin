class Subject < ApplicationRecord
    belongs_to :teacher
    belongs_to :location
end
