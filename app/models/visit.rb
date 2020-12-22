class Visit < ApplicationRecord
  belongs_to :patient, class_name: 'User'
  belongs_to :doctor, class_name: 'User'
  belongs_to :created_by, class_name: 'User'
  belongs_to :visit_type
end
