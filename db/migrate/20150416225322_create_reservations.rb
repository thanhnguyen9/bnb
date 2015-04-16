class CreateReservations < ActiveRecord::Migration
  def change
    create_table :reservations do |t|
      t.integer :booker_id, null: false
      t.integer :listing_id, null: false
      t.string :start_date, null: false
      t.string :end_date, null: false

      t.timestamps
    end

    add_index :reservations, :booker_id
    add_index :reservations, :listing_id
  end
end
