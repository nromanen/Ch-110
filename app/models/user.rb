class User < ApplicationRecord
  has_one :patient_profile
  has_one :doctor_profile
  has_many :visits
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :confirmable

  validates :name, :surname, presence: true

  enum role: %i(admin manager doctor patient)
end
