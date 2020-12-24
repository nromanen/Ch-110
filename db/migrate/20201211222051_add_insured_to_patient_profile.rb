class AddInsuredToPatientProfile < ActiveRecord::Migration[6.0]
  def change
    add_column :patient_profiles, :is_insured, :boolean, :default => false
  end
end
