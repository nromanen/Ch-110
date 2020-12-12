class DoctorProfile < ApplicationRecord
  belongs_to :user
  enum specialization: { dentist: 0, therapist: 1, surgeon: 2 }
  validates :user_id, presence: true, uniqueness: true
  validates :photo_path, :specialization, presence: true
end
