class ScheduleSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :student
  has_many :periods
  has_many :subjects , through: :periods

end
