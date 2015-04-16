module Api
  class ListingsController < ApplicationController
    def search
      @listings = filter(search_params)
      render :search
    end

    def show
      @listing = Listing.find(params[:id])
      render :show
    end

    private

    def filter(params)
      return [] if (params[:lat].empty? || params[:lng].empty?)

      price_min = params[:min]
      price_max = params[:max]
      lat_min, lat_max = params[:lat]
      lng_min, lng_max = params[:lng]
      listings = Listing.where(latitude: lat_min..lat_max)
                        .where(longitude: lng_min..lng_max)
      if price_min != "-1"
        listings = listings.where(price_daily: price_min..price_max)
      end
      # listings = Listing.find_by_sql(<<-SQL)
      #   SELECT
      #     *
      #   FROM
      #     listings
      #   WHERE
      #     latitude BETWEEN #{lat_min} AND #{lat_max}
      #   AND
      #     longitude BETWEEN #{lng_min} AND #{lng_max}
      #   AND
      #     price_daily BETWEEN #{price_min} AND #{price_max}
      #   AND
      #     booked = FALSE
      # SQL

      listings
    end

    def search_params
      params.require(:search).permit(:min, :max, :lat => [], :lng => [])
    end
  end
end
