class Location < ApplicationRecord
  has_many :subjects
  has_many :periods, through: :subjects
  has_many :errs
  has_many :Event

  validates :name, presence: true
end

