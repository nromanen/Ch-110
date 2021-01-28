class VisitType < ApplicationRecord
  has_many :visits, dependent: :nullify

  before_save :ensure_length_times_5
  validates :length, :name, presence: true

  
  private
  
  def ensure_length_times_5
    if length.to_i % 5 != 0
      errors.add(:length, "should be times 5")
      throw :abort
    end
  end
  
end
