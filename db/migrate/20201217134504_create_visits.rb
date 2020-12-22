class CreateVisits < ActiveRecord::Migration[6.0]
  def change
    create_table :visits do |t|
      t.references :patient, null: false, foreign_key: {to_table: :users}
      t.references :doctor, null: false, foreign_key: {to_table: :users}
      t.datetime :start_time
      t.references :visit_type, null: false,  foreign_key: true
      t.references :created_by, null: false,  foreign_key: {to_table: :users}

      t.timestamps
    end
  end
end
