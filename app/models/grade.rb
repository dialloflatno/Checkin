class Grade < ApplicationRecord
  belongs_to :teacher
  belongs_to :student

  validates :grade,
            presence: true,
            numericality: {
              only_integer: true,
              less_than_or_equal_to: 100,
            }
  validates :teacher_id, presence: true
  validates :student_id, presence: true
end
