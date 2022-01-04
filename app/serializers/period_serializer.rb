class PeriodSerializer < ActiveModel::Serializer
  attributes :subject, :start_time, :end_time

  belongs_to :subject
end
