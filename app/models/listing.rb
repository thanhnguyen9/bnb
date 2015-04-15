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

end
