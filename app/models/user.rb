class User < ActiveRecord::Base
  has_many :sessions
  has_many :listings, -> { order "name ASC" }
  has_many :reservations, -> { order "start_date ASC" },
                          foreign_key: :booker_id

  validates :email, :password_digest, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password

  def self.find_by_credentials(params)
    user = User.find_by_email(params[:email])
    return nil if user.nil?
    user.is_password?(params[:password]) ? user : nil
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end
end
