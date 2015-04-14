class AddAvatarUrlToUsers < ActiveRecord::Migration
  def up
    add_column :users, :avatar_url, :string

    remove_column :listings, :description
    add_column :listings, :description, :text, null: false
  end

  def down
    remove_column :users, :avatar_url

    remove_column :listings, :description
    add_column :listings, :description, :string, null: false
  end
end
