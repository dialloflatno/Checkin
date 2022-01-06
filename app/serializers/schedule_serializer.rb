class ScheduleSerializer < ActiveModel::Serializer
  attributes :id, :periods, :student

  belongs_to :student
  has_many :periods
end
