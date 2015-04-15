module Api
  class ListingsController < ApplicationController
    def search
      @listings = Listing.find_by_location(search_params)
      render :search
    end

    def show
      @listing = Listing.find(params[:id])
      render :show
    end

    private

    def search_params
      params.require(:search).permit(:lat => [], :lng => [])
    end
  end
end
