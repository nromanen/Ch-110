class PatientProfile < ApplicationRecord
  belongs_to :user
  enum gender: { male: 0, female: 1 }
  validates :user_id, presence: true, uniqueness: true
  validates :gender, presence: true
  validates :height, length: { minimum: 2 }
end
