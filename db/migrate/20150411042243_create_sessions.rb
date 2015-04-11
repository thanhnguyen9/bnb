class CreateSessions < ActiveRecord::Migration
  def up
    create_table :sessions do |t|
      t.string :session_token, null: false
      t.integer :user_id, null: false

      t.timestamps
    end

    add_index :sessions, :session_token, unique: true
    add_index :sessions, :user_id

    remove_column :users, :session_token
  end

  def down
    drop_table :sessions

    add_column :users, :session_token, null: false
  end
end
