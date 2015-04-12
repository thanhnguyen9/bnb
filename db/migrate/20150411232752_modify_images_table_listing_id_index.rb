class ModifyImagesTableListingIdIndex < ActiveRecord::Migration
  def up
    remove_index :images, :listing_id
    add_index :images, :listing_id
  end

  def down
    remove_index :images, :listing_id
    add_index :images, :listing_id, unique: true
  end
end
