json.array! @listings do |listing|
  json.extract! listing, :id, :user_id, :name, :description, :latitude,
                         :longitude, :address, :price_daily, :booked

  json.images listing.images do |image|
    json.extract! image, :listing_id, :url
  end
end
