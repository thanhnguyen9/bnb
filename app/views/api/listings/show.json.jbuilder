json.extract! @listing, :id, :user_id, :name, :description, :latitude,
                        :longitude, :address, :price_daily, :booked

json.images @listing.images do |image|
  json.extract! image, :listing_id, :url
end

json.user(@listing.user, :email, :avatar_url)
