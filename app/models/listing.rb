class Listing < ActiveRecord::Base
  belongs_to :user
  has_many :images

  validates :name, :description, :city, :state, :country, :price_daily,
            :price_weekly, :booked, :user_id, presence: true
end
