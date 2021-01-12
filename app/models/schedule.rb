class Schedule < ApplicationRecord
  belongs_to :user
  belongs_to :visit_type
  enum day: { Monday: 1, Tuesday: 2, Wednesday: 3, Thursday: 4, Friday: 5, Saturday: 6, Sunday: 7 }

  validates :user, :visit_type, :day, presence: true

  validates_with ScheduleValidator
end
