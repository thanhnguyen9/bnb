class Listing < ActiveRecord::Base
  belongs_to :user
  has_many :images

  validates :name, :description, :price_daily, :price_weekly, :user_id,
            presence: true

  def self.find_by_location(search_params)
    # return Listing.all if search_params[:location] == ""
    lat, ltg = search_params[:location]
    lat_min, lat_max = [lat - 0.0725, lat + 0.0725]
    ltg_min, ltg_max = [ltg - 0.0725, ltg + 0.0725]
    listings = Listing.find_by_sql(<<-SQL)
      SELECT
        *
      FROM
        listings
      WHERE
        latitude BETWEEN #{lat_min} AND #{lat_max}
      AND
        longitude BETWEEN #{ltg_min} AND #{ltg_max}
      AND
        booked = FALSE
    SQL

    listings
  end

end
