module Api
  class ListingsController < ApplicationController
    def search_by_location
      location = { lat: search_params[:lat],
                   lng: search_params[:lng] }
      @listings = Listing.find_by_location(location)
      render :search
    end

    def search_by_price
      prices = { min: search_params[:min],
                 max: search_params[:max] }
      @listings = Listing.find_by_price(prices)
      render :search
    end

    def show
      @listing = Listing.find(params[:id])
      render :show
    end

    private

    def search_params
      params.require(:search).permit(:min,
                                     :max,
                                     :lat => [],
                                     :lng => [])
    end
  end
end
