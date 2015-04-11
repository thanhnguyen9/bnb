class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :current_user, :auth_input, :logged_in?

  def auth_input
    "<input type='hidden' name='authenticity_token'
      value=#{form_authenticity_token}>".html_safe
  end

  def current_user
    return nil if current_session.nil?
    @current_user ||= User.find(current_session.user_id)
  end

  def current_session
    return nil if session[:session_token].nil?
    @current_session ||= Session.find_by_session_token(session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login!(user)
    @current_session = Session.create!(user_id: user.id,
                                       session_token: Session.generate_session_token)
    session[:session_token] = @current_session.session_token
  end

  def logout!
    current_session.try(:remove_session!)
    session[:session_token] = nil
  end

  def user_params
    params.require(:user).permit(:email, :password)
  end

  def redirect_if_logged_in
    redirect_to user_url(current_user) if logged_in?
  end
end
