json.extract! @reservation, :id, :start_date, :end_date

json.listing(@reservation.listing, :id, :name)

json.host(@reservation.listing.user, :id, :email)
