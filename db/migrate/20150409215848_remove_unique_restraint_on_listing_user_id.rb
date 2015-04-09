class RemoveUniqueRestraintOnListingUserId < ActiveRecord::Migration
  def up
    remove_index :listings, :user_id
    add_index :listings, :user_id
  end

  def down
    remove_index :listings, :user_id
    add_index :listings, :user_id, unique: true
  end
end
