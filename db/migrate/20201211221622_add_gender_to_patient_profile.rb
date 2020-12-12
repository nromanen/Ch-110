class AddGenderToPatientProfile < ActiveRecord::Migration[6.0]
  def change
    add_column :patient_profiles, :gender, :integer
  end
end
