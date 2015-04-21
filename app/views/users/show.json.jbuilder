json.extract! @user, :id, :email, :avatar_url

json.reservations @user.reservations do |reservation|
  json.extract! reservation, :start_date, :end_date

  json.listing(reservation.listing, :id, :name)

  json.host(reservation.listing.user, :id, :email)
end

json.listings @user.listings do |listing|
  json.extract! listing, :id, :name
end
