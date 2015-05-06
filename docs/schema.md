# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, pk
email           | string    | not null, unique
password_digest | string    | not null
avatar_url      | string    | not null

## sessions
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, pk
user_id         | integer   | not null, fk (ref users)
session_token   | string    | not null

## listings
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, pk
user_id         | integer   | not null, fk (ref users)
name            | string    | not null
description     | text      | not null
latitude        | decimal   | not null
longitude       | decimal   | not null
address         | string    | not null
price_daily     | integer   | not null
booked          | boolean   | not null, default: false

## images
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, pk
url             | string    | not null, unique
listing_id      | integer   | not null, fk (ref listings)

## reservations
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, pk
booker_id       | integer   | not null, fk (ref users)
listing_id      | integer   | not null, fk (ref listings)
start_date      | string    | not null
end_date        | string    | not null
