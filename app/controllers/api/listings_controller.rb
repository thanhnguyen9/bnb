module Api
  class ListingsController < ApplicationController
    def search
      @listings = Listing.find_by_location(search_params)
      # render json: @listings
      render json: @listings
    end

    private

    def search_params
      params.require(:search).permit(:location)
    end
  end
end
