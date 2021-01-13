class AddCashedNamesForUsersToVisits < ActiveRecord::Migration[6.0]
  def change
    add_column :visits, :patient_name, :string
    add_column :visits, :doctor_name, :string
  end
end
