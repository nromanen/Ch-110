class User < ApplicationRecord
  has_one :patient_profile, dependent: :destroy
  has_one :doctor_profile, dependent: :destroy
  has_many :schedules, dependent: :destroy

  has_many :visits, foreign_key: "created_by_id", dependent: :nullify

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :confirmable

  validates :name, :surname, presence: true

  enum role: %i(admin manager doctor patient)
end
