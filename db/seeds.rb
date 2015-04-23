# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
Listing.destroy_all
Image.destroy_all
Reservation.destroy_all

guest = User.create!(email: 'Guest', password: 'password',
                     avatar_url: 'https://s3-us-west-1.amazonaws.com/petbnb/images/male_avatar.png')

amy = User.create!(email: 'Amy', password: 'amyamyamy',
                   avatar_url: 'https://s3-us-west-1.amazonaws.com/petbnb/images/female_avatar.png')

shibo = User.create!(email: 'Shibo', password: 'shibofang',
                     avatar_url: 'https://s3-us-west-1.amazonaws.com/petbnb/images/female_avatar.png')

listing1 = amy.listings.create!(name: 'Cozy cat heaven in Noe Valley',
                                description: 'Give your cat the royal treatment when you go on vacation by leaving him or her at my place :) I will make sure to love him or her as much (or even more than) you do!',
                                address: 'Noe Valley, San Francisco, CA, United States',
                                latitude: 37.7502378,
                                longitude: -122.4337029,
                                price_daily: 10)

listing2 = amy.listings.create!(name: "Your kitty's home away from home",
                                description: "Your kitty will feel right at home here; I'm an experienced catsitter and have been doing this for more than 10 years. Go to http://www.yelp.com/biz/pets-love-amy-oakland to check out my reviews!",
                                address: 'Downtown, Oakland, CA, United States',
                                latitude: 37.8043637,
                                longitude: -122.2711137,
                                price_daily: 25)

listing3 = guest.listings.create!(name: "Pacific Heights Doggie Playground",
                                  description: "Let your doggies play to to their heart's content!",
                                  address: 'Lower Pacific Heights, San Francisco, CA, United States',
                                  latitude: 37.787075,
                                  longitude: -122.446592,
                                  price_daily: 7)

listing4 = shibo.listings.create!(name: "Spacious loft in SOMA",
                                  description: "This art dealer's loft has everything you pet(s) may need - ultra modern, ample space & plenty of sun with ideal location no matter what kind of hobbies they enjoy. Apartment is close to pet restaurants, bars, clubs, coffee shops and public transit.",
                                  address: 'SOMA, San Francisco, CA, United States',
                                  latitude: 37.774477,
                                  longitude: -122.40842,
                                  price_daily: 12)

listing5 = shibo.listings.create!(name: "Private remodeled one-bedroom cottage",
                                  description: "This fully detached cottage is newly remodeled complete with marble floors and countertops in the bathroom and hardwood floors throughout. The bedroom offers a full size bed with a new, plush, Serta mattress. We also provide pet shampoo.",
                                  address: 'Inner Richmond, San Francisco, CA, United States',
                                  latitude: 37.777037,
                                  longitude: -122.465402,
                                  price_daily: 50)

listing1.images.create!(url: 'https://s3-us-west-1.amazonaws.com/petbnb/images/listings/listing1a.jpg')
listing1.images.create!(url: 'https://s3-us-west-1.amazonaws.com/petbnb/images/listings/listing1b.jpg')
listing1.images.create!(url: 'https://s3-us-west-1.amazonaws.com/petbnb/images/listings/listing1c.jpg')

listing2.images.create!(url: 'https://s3-us-west-1.amazonaws.com/petbnb/images/listings/listing2a.jpg')
listing2.images.create!(url: 'https://s3-us-west-1.amazonaws.com/petbnb/images/listings/listing2b.jpg')

listing3.images.create!(url: 'https://s3-us-west-1.amazonaws.com/petbnb/images/listings/listing3.jpg')

listing4.images.create!(url: 'https://s3-us-west-1.amazonaws.com/petbnb/images/listings/listing4a.jpg')
listing4.images.create!(url: 'https://s3-us-west-1.amazonaws.com/petbnb/images/listings/listing4b.jpg')

listing5.images.create!(url: 'https://s3-us-west-1.amazonaws.com/petbnb/images/listings/listing5a.jpg')
listing5.images.create!(url: 'https://s3-us-west-1.amazonaws.com/petbnb/images/listings/listing5b.jpg')
listing5.images.create!(url: 'https://s3-us-west-1.amazonaws.com/petbnb/images/listings/listing5c.jpg')
listing5.images.create!(url: 'https://s3-us-west-1.amazonaws.com/petbnb/images/listings/listing5d.jpg')
listing5.images.create!(url: 'https://s3-us-west-1.amazonaws.com/petbnb/images/listings/listing5e.jpg')
