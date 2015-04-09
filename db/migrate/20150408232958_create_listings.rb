class CreateListings < ActiveRecord::Migration
  def change
    create_table :listings do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :country, null: false
      t.integer :price_daily, null: false
      t.integer :price_weekly, null: false
      t.boolean :booked, null: false, default: false
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :listings, :user_id, unique: true
  end
end
