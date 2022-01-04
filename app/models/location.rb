class Location < ApplicationRecord
  has_many :subjects
  has_many :errs

  validates :name, presence: true
end

Location.create(name: '')