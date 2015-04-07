class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :current_user, :auth_input

  def auth_input
    "<input type='hidden' name='authenticity_token'
      value=#{form_authenticity_token}>".html_safe
  end

  def current_user
    User.find_by_session_token(session[:session_token])
  end

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
