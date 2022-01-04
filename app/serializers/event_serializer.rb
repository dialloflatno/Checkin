class EventSerializer < ActiveModel::Serializer
  attributes :id, :title, :planner, :time, :date, :location
  belongs_to :location
end
