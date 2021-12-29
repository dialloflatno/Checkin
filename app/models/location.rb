class Location < ApplicationRecord
    has_many :subjects
    has_many :errs
end
