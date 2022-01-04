class Event < ApplicationRecord
  belongs_to :location

  validates :title, presence: true
  validates :planner, presence: true
  validates :time, presence: true, numericality: { only_integer: true }
  validates :date, presence: true, numericality: { only_integer: true }
  validates :location_id, presence: true
end
Event.create(
  title: 'RACK CATS VS NEW CHARTER BASKET BALL',
  planner: 'BobCat Club',
  time: Time.new(2022, 1, 1, 0, 9, 0, 0),
  date: DateTime.new(2022, 1, 1, 0, 0, 0),
  location_id: 4,
)
