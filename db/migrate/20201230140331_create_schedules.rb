class CreateSchedules < ActiveRecord::Migration[6.0]
  def change
    create_table :schedules do |t|
      t.references :user, null: false, foreign_key: true
      t.integer :day
      t.time :start_time
      t.time :end_time
      t.references :visit_type, null: false, foreign_key: true

      t.timestamps
    end
  end
end
