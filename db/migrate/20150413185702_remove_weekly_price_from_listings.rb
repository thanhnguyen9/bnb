class RemoveWeeklyPriceFromListings < ActiveRecord::Migration
  def up
    remove_column :listings, :price_weekly
  end

  def down
    add_column :listings, :price_weekly, :integer, null: false
  end
end
