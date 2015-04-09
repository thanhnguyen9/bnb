class Image < ActiveRecord::Base
  belongs_to :listing

  validates :url, :listing_id, presence: true
  validates :url, uniqueness: true
end
