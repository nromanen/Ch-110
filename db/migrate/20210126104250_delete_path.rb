class DeletePath < ActiveRecord::Migration[6.0]
  def change
  	remove_column :doctor_profiles, :photo_path
  end
end
