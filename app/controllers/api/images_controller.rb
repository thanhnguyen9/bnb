module Api
  class ImagesController < ApplicationController
    def create
      @image = Image.new(image_params)
      if @image.save
        render json: @image
      else
        render json: @image.errors.full_messages,
                     status: :unprocessable_entity
      end
    end
  end
end
