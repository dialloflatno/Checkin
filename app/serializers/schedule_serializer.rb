class ScheduleSerializer < ActiveModel::Serializer
  attributes :periods, :student

  belongs_to :student
  has_many :periods
end
