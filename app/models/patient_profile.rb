class PatientProfile < ApplicationRecord
  belongs_to :user
  enum gender: { male: 0, female: 1 }
  enum blood_type: { A: 0, B: 1, AB: 2, O: 3 }
  validates :user_id, presence: true, uniqueness: true
  validates :gender, :height, :weight, :allergies, :blood_type, presence: true
end
