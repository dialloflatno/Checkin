class Err < ApplicationRecord
  belongs_to :location
  belongs_to :student

  validates :emergency, presence: true
  validates :location, presence: true
end



