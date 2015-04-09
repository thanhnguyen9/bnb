# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150409215848) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "images", force: true do |t|
    t.string   "url",        null: false
    t.integer  "listing_id", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "images", ["listing_id"], name: "index_images_on_listing_id", unique: true, using: :btree

  create_table "listings", force: true do |t|
    t.string   "name",                         null: false
    t.string   "description",                  null: false
    t.string   "city",                         null: false
    t.string   "state",                        null: false
    t.string   "country",                      null: false
    t.integer  "price_daily",                  null: false
    t.integer  "price_weekly",                 null: false
    t.boolean  "booked",       default: false, null: false
    t.integer  "user_id",                      null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "listings", ["user_id"], name: "index_listings_on_user_id", using: :btree

  create_table "users", force: true do |t|
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree

end
