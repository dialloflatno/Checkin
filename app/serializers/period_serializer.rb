class PeriodSerializer < ActiveModel::Serializer
  attributes :id, :subject, :start_time, :end_time

  belongs_to :subject
end
