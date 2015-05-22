module Api
  class ListingsController < ApplicationController
    def create
      @listing = Listing.save_to_db(listing_params)
      if @listing
        render json: @listing
      else
        render json: @listing.errors.full_messages,
                     status: :unprocessable_entity
      end
    end

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

      listings
    end

    def search_params
      params.require(:search).permit(:min, :max, :lat => [], :lng => [])
    end

    def listing_params
      params.require(:listing).permit(:title, :address, :description, :city,
                                      :state, :price)
    end
  end
end
