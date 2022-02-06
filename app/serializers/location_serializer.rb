class LocationSerializer < ActiveModel::Serializer
  attributes :name , :periods
  has_many :subjects
  has_many :periods, through: :subjects
  has_many :errs
end
