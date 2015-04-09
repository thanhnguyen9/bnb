class Listing < ActiveRecord::Base
  belongs_to :user
  has_many :images

  validates :name, :description, :city, :state, :country, :price_daily,
            :price_weekly, :booked, :user_id, presence: true

  def self.find_by_location(search_params)
    location = search_params[:location]
    city, state, country = location.split(',').map(&:strip)
  end
end
