class CreatePatientProfiles < ActiveRecord::Migration[6.0]
  def change
    create_table :patient_profiles do |t|
      t.integer :weight
      t.integer :height
      t.integer :blood_type
      t.string :allergies
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
