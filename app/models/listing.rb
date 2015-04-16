class Listing < ActiveRecord::Base
  belongs_to :user
  has_many :images, -> { order "url ASC"}

  validates :name, :description, :price_daily, :user_id, presence: true

  def self.filter(params)
    return [] if (params[:lat].empty? || params[:lng].empty?)

    price_min = params[:min]
    price_max = params[:max]
    lat_min, lat_max = params[:lat]
    lng_min, lng_max = params[:lng]
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
        price_daily BETWEEN #{price_min} AND #{price_max}
      AND
        booked = FALSE
    SQL

    listings
  end
end
