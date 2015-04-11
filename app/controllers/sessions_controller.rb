class SessionsController < ApplicationController
  before_action :redirect_if_logged_in, only: [:create]
  before_filter :logged_in?, only: [:destroy]

  def create
    @user = User.find_by_credentials(user_params)
    if @user
      login!(@user)
      render json: @user
    else
      render json: 'Incorrect credentials'.to_json,
                   status: :unprocessable_entity
    end
  end

  def destroy
    logout!
    redirect_to :root
  end
end
