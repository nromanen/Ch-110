class Schedule < ApplicationRecord
  belongs_to :user
  belongs_to :visit_type
  enum day: %i(Empty Monday Tuesday Wednesday Thursday Friday Saturday Sunday)
end
