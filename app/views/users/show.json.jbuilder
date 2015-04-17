json.extract! @user, :id, :email, :avatar_url

json.reservations @user.reservations do |reservation|
  json.extract! reservation, :listing_id, :start_date, :end_date
end
