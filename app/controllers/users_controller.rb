module Api
  class UsersController < ApplicationController
    def create
      @user = User.new(user_params)
      if @user.save
        render json: @user
      else
        render json: @user.errors.full_messages,
                     status: :unprocessable_entity
      end
    end

    def show
      @user = User.find(params[:id])
      if @user
        render json: @user
      else
        redirect_to :root
      end
    end
  end
end
