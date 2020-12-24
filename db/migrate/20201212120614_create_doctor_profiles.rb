class CreateDoctorProfiles < ActiveRecord::Migration[6.0]
  def change
    create_table :doctor_profiles do |t|
      t.string :photo_path
      t.integer :specialization
      t.text :description
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
