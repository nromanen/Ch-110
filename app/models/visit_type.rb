class VisitType < ApplicationRecord
  has_many :visits, dependent: :nullify

  validates :length, :name, presence: true
  
end
