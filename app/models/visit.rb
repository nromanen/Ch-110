class Visit < ApplicationRecord
  before_destroy :ensure_that_can_be_canceled
  
  belongs_to :patient, class_name: 'User'
  belongs_to :doctor, class_name: 'User'
  belongs_to :created_by, class_name: 'User'
  belongs_to :visit_type

  validates :patient, :doctor, :start_time, :visit_type, presence: true

  #minimal interval to cancel the visit - 1 hour
  CANCEL_TIME = 3600

  validates_with VisitValidator

  private

  def ensure_that_can_be_canceled
    if (start_time - DateTime.now).to_i < CANCEL_TIME
      errors.add(:base, "Less #{CANCEL_TIME / 60} than minutes left to an appointment.")
      throw :abort
    end
  end
end
