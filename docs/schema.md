# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, pk
email           | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null

## listings
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, pk
user_id         | integer   | not null, fk (ref users)
name            | string    | not null
description     | string    | not null
city            | string    | not null
state           | string    | not null
country         | string    | not null
price_daily     | integer   | not null
price_weekly    | integer   | not null
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
customer_id     | integer   | not null, fk (ref users)
listing_id      | integer   | not null, fk (ref listings)

## reviews
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, pk
user_id         | integer   | not null, fk (ref users)
body            | string    | not null
