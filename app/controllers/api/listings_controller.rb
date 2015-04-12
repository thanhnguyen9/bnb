module Api
  class ListingsController < ApplicationController
    def search
      @listings = Listing.find_by_location(search_params)
      render json: @listings
    end

    def show
      @listing = Listing.find(params[:id])
      @images = @listing.images
      render :show
    end

    private

    def search_params
      params.require(:search).permit(:latitude, :longitude)
    end
  end
end
