class Listing < ActiveRecord::Base
  belongs_to :user
  has_many :images, -> { order "url ASC"}

  validates :name, :description, :price_daily, :user_id, presence: true

  def self.find_by_location(coords)
    return [] if coords.empty?

    lat_min, lat_max = coords[:lat]
    lng_min, lng_max = coords[:lng]
    listings = Listing.find_by_sql(<<-SQL)
      SELECT
        *
      FROM
        listings
      WHERE
        latitude BETWEEN #{lat_min} AND #{lat_max}
      AND
        longitude BETWEEN #{lng_min} AND #{lng_max}
      AND
        booked = FALSE
    SQL

    listings
  end

  def self.find_by_price(prices)
    # return [] if coords.empty?

    price_min = prices[:min]
    price_max = prices[:max]
    listings = Listing.find_by_sql(<<-SQL)
      SELECT
        *
      FROM
        listings
      WHERE
        price_daily BETWEEN #{price_min} AND #{price_max}
      AND
        booked = FALSE
    SQL

    listings
  end
end
