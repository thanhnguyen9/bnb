class Session < ActiveRecord::Base
  belongs_to :user

  validates :session_token, :user_id, presence: true
  validates :session_token, uniqueness: true

  before_validation :ensure_session_token

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def remove_session!
    Session.destroy(id)
  end

  private

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end
end
