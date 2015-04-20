class AddAddressToListing < ActiveRecord::Migration
  def up
    add_column :listings, :address, :string, null: false
  end

  def down
    remove_column :listings, :address
  end
end
