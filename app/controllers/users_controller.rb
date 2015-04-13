class UsersController < ApplicationController
  before_action :redirect_if_logged_in, only: [:create]

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
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
