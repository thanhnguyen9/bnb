# json.(@listing, :user_id, :name, :description, :latitude, :longitude,
#                 :price_daily, :booked)
#
# @images ||= nil
# unless @images.nil?
#   json.images(@images) do |image|
#     json.(image, :listing_id, :url)
#   end
# end
#
# json.user(@user, :email)

json.extract! @listing, :user_id, :name, :description, :latitude, :longitude,
                        :price_daily, :booked

json.images @listing.images do |image|
  json.extract! image, :listing_id, :url
end

json.user(@listing.user, :email)
