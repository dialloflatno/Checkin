class User < ApplicationRecord
    has_many :students
    has_many :teachers
end
