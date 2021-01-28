class DoctorProfile < ApplicationRecord
  belongs_to :user
  enum specialization: { dentist: 0, therapist: 1, surgeon: 2 }
  validates :user_id, presence: true, uniqueness: true
  validates :specialization, presence: true
  has_one_attached :avatar
end
