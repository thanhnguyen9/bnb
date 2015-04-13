class Listing < ActiveRecord::Base
  belongs_to :user
  has_many :images

  validates :name, :description, :price_daily, :user_id, presence: true

  def self.find_by_location(coords)
    # return Listing.all if coords[:location] == ""
    lat, ltg = coords['latitude'].to_f, coords['longitude'].to_f
    range = 10 / 69.0
    lat_min, lat_max = [lat - range, lat + range]
    ltg_min, ltg_max = [ltg - range, ltg + range]
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
