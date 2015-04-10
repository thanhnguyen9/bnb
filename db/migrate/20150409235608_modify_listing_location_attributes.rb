class ModifyListingLocationAttributes < ActiveRecord::Migration
  def up
    remove_column :listings, :city
    remove_column :listings, :state
    remove_column :listings, :country

    add_column :listings, :latitude, :decimal, default: 0
    add_column :listings, :longitude, :decimal, default: 0
  end

  def down
    remove_column :listings, :latitude
    remove_column :listings, :longitude

    add_column :listings, :string, :city, null: false
    add_column :listings, :string, :state, null: false
    add_column :listings, :string, :country, null: false
  end
end
