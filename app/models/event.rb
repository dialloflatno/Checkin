class Event < ApplicationRecord
  belongs_to :location

  validates :title, presence: true
  validates :planner, presence: true
  # validates :time, presence: true, numericality: { only_integer: true }
  # validates :date, presence: true, numericality: { only_integer: true }
  validates :location_id, presence: true
end
