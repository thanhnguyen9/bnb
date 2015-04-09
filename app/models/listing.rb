class Listing < ActiveRecord::Base
  belongs_to :user
  has_many :images

  validates :name, :description, :city, :state, :country, :price_daily,
            :price_weekly, :user_id, presence: true

  def self.find_by_location(search_params)
    return Listing.all #if search_params[:location] == ""

    # location = search_params[:location]
    # search_query = ""
    # city, state, country = location.split(',').map(&:strip).map(&:downcase)
    # search_query += "lower(city) LIKE %?%"
    # Listing.where("lower(city) LIKE ? AND lower(state) LIKE ? AND " +
    #               "lower(country) LIKE ?", city, state, country)
  end
end
