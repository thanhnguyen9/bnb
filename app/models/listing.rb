class Listing < ActiveRecord::Base
  belongs_to :user
  has_many :images, -> { order "url ASC" }
  has_many :reservations, -> { order "start_date ASC" }

  validates :name, :description, :latitude, :longitude, :address,
            :price_daily, :user_id, presence: true

  def has_overlaps?(other_res)
    reservations.any? do |res|
      res.overlaps?(other_res)
    end
  end
end
