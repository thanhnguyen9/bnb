class Reservation < ActiveRecord::Base
  belongs_to :booker, class_name: :User, foreign_key: :booker_id
  belongs_to :listing

  validates :booker_id, :listing_id, :start_date, :end_date,
            presence: true

  def try_booking
    listing = Listing.find(listing_id)
    if listing.booked && listing.has_overlaps?(self)
      errors[:listing] = 'is already booked on those dates'
      return false
    else
      self.save!
      listing.update(booked: true)
    end

    return true
  end

  def overlaps?(other_res)
    start_date < other_res.end_date && other_res.start_date < end_date
  end
end
