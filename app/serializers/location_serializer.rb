class LocationSerializer < ActiveModel::Serializer
  attributes :name
  has_many :subjects
  has_many :errs
end
