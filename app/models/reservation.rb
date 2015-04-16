class Reservation < ActiveRecord::Base
  belongs_to :booker, class_name: :User, foreign_key: :booker_id
  belongs_to :listing

  validates :booker_id, :listing_id, :start_date, :end_date,
            presence: true
end
