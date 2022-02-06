class Event < ApplicationRecord
  belongs_to :location

  validates :title, presence: true
  validates :planner, presence: true
  validates :location_id, presence: true
end
