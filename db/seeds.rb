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

andy = User.create!(email: 'Andy', password: 'andyandy',
                     avatar_url: 'https://s3-us-west-1.amazonaws.com/petbnb/images/male_avatar2.png')

listing1 = andy.listings.create!(name: 'Cozy cat heaven in Noe Valley',
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

listing3 = andy.listings.create!(name: "Pacific Heights Doggie Playground",
                                  description: "Let your doggies play to to their heart's content!",
                                  address: 'Lower Pacific Heights, San Francisco, CA, United States',
                                  latitude: 37.787075,
                                  longitude: -122.446592,
                                  price_daily: 7)

listing4 = andy.listings.create!(name: "Spacious loft in SOMA",
                                  description: "This art dealer's loft has everything you pet(s) may need - ultra modern, ample space & plenty of sun with ideal location no matter what kind of hobbies they enjoy. Apartment is close to pet restaurants, bars, clubs, coffee shops and public transit.",
                                  address: 'SOMA, San Francisco, CA, United States',
                                  latitude: 37.774477,
                                  longitude: -122.40842,
                                  price_daily: 12)

listing5 = andy.listings.create!(name: "Private remodeled one-bedroom cottage",
                                  description: "This fully detached cottage is newly remodeled complete with marble floors and countertops in the bathroom and hardwood floors throughout. The bedroom offers a full size bed with a new, plush, Serta mattress. We also provide pet shampoo.",
                                  address: 'Inner Richmond, San Francisco, CA, United States',
                                  latitude: 37.777037,
                                  longitude: -122.465402,
                                  price_daily: 50)

listing6 = andy.listings.create!(name: "Ocean beach + Golden Gate Park",
                                  description: "Our beautiful, completely renovated (i.e. modern and comfortable) three bedroom flat is located one block from the beach, in the heart of Ocean Beach. This is a safe and quite neighborhood located along the western edge of San Francisco, where the City meets the Sea.",
                                  address: 'Outer Sunset, San Francisco, CA, United States',
                                  latitude: 37.7606035,
                                  longitude: -122.5045975,
                                  price_daily: 72)

listing7 = shibo.listings.create!(name: "Hideaway in the center of Tokyo",
                                  description: "Private room with affordable price. This is cheapest accommodation for pets in Shibuya. The space is not big but your pet will have fun. It is recommend for those who want to save money and want their pets to relax.",
                                  address: 'Shibuya, Tokyo, Japan',
                                  latitude: 35.657241,
                                  longitude: 139.693641,
                                  price_daily: 5)

listing8 = shibo.listings.create!(name: "Country house",
                                  description: "We are in the country. Really the country. Walk through the rice fields. Enjoy the garden. Meals included in room price. Served indoors or in yard to your puppy's preference. We accommodate One or two puppies. Free pickup and return from Narita Airport or Narita train Station.",
                                  address: 'Narita, Chiba, Japan',
                                  latitude: 35.8103981,
                                  longitude: 140.3467229,
                                  price_daily: 20)

listing9 = shibo.listings.create!(name: "Gangnam design studio",
                                  description: "Hello friends. This flat is a brand new designer's studio furnished with my favorite design furnitures, products and books. I would love to offer my place for a sophisticated cat who appreciates design and art. It's located in the heart of Seoul, near Gangnam Station. Seoul's favorite tuna & milk pub is located in the ground floor.",
                                  address: 'Gangnam, Seoul, Korea',
                                  latitude: 37.497942,
                                  longitude: 127.027621,
                                  price_daily: 75)

listing10 = andy.listings.create!(name: "Large studio near Hyde Park",
                                  description: "Large studio apartment with separate kitchen and bathroom, minutes from Hyde Park, where your pets can play to their hearts' content.",
                                  address: 'Craven Terrace, London, United Kingdom',
                                  latitude: 51.5133495,
                                  longitude: -0.1794755,
                                  price_daily: 120)

listing11 = andy.listings.create!(name: "Riverfront apartment across from Louvre Museum",
                                  description: "Modern designer apartment facing the river Seine and the Pont Neuf, 50 meters away from Le Louvre Museum. Features: sweeping views of the Seine, fireplace, marble bar, master bedroom with round king-size bed, bathroom with Italian marble tiling, power room with genuine 24k gold mosaic floors and gold leaf walls, calvin klein pet beds with 500-threadcount Egyptian cotton sheets. Unfortunately, no elevator.",
                                  address: 'Quai du Louvre, Paris, Île-de-France, France',
                                  latitude: 48.8619309,
                                  longitude: 2.3377137,
                                  price_daily: 222)

listing12 = andy.listings.create!(name: "Brand new 2B apartment",
                                  description: "Brand new cozy two bedroom in the heart of touristy Chinatown. Cozy two bedroom apartment located close to Canal street; it's also a short walk to Little Italy, SoHo, and Lower East Side. There are 2 bedrooms in the apartment. One bedroom has a queen size bed and the other has a twin bed (for the non-alpha pet you may have). The common area has a nice couch which can also be used to sleep on. The apartment was just renovated in mid-2014 with modern appliances.",
                                  address: 'Chinatown, New York, New York',
                                  latitude: 40.7160817,
                                  longitude: -73.9968809,
                                  price_daily: 32)

listing13 = guest.listings.create!(name: "Beachside studio",
                                  description: "This studio is perfect for the adventurous pet wanting direct access to the stunning famous beaches of Sydney or just a cosy quiet spot to get away from the other pets on the streets. What makes this place unique? THE LOCATION! From the back yard there are opportunities to see dolphins, whales, seals and the occasional penguin. The block has a lovely community feel with young animal citizens and a great vibe.",
                                  address: 'Vaucluse, Sydney, New South Wales, Australia',
                                  latitude: -33.8512074,
                                  longitude: 151.266793,
                                  price_daily: 100)

listing14 = shibo.listings.create!(name: "Romantic getaway spot",
                                  description: "Best getaway spot for your pet couple! Cute furnishings! Heart-pounding round bed! Super close to bustling Nanjing Road for all your food needs!",
                                  address: "People's Square, Shanghai, China",
                                  latitude: 31.2359535,
                                  longitude: 121.479701,
                                  price_daily: 17)

listing15 = shibo.listings.create!(name: "Beverly Hills jewel",
                                  description: "High end shopping, restaurants, nightlife, and parks all within steps from this beautifully decorated jewel in the heart of Beverly Hills.",
                                  address: "Beverly Hills, Los Angeles, CA, United States",
                                  latitude: 34.0825489,
                                  longitude: -118.3995339,
                                  price_daily: 143)

listing16 = shibo.listings.create!(name: "Artsy apartment in heart of Chicago",
                                  description: "This River North Gallery District home is located conveniently to anywhere your kitty needs to go! Our quiet home is in a well-maintained vintage walk-up building in the River North Gallery District filled with restaurants, nightclubs and, of course, galleries. We are crawling distance to most of downtown Chicago, and our feline visitors get the best of a local experience! Our great reviews show many kitties and their humans have loved it so far, so we're sure your kitty and you will too! As always we still ask no cleaning fee.",
                                  address: "River North, Chicago, IL, United States",
                                  latitude: 41.888056,
                                  longitude: -87.63226,
                                  price_daily: 234)

listing17 = shibo.listings.create!(name: "Spectacular Lincoln Park garden apartment",
                                  description: "A charming and comfortable garden apartment in the heart of Lincoln Park neighborhood on a quiet residential street. A private apartment with separate front entrance and small patio. The bedroom has a very comfortable queen size bed with deluxe bedding and hotel quality mattress and mattress pad. The space is very cozy and welcoming, with a lot of natural light and decorative additions from my own many travels.",
                                  address: "Lincoln Park, Chicago, IL, United States",
                                  latitude: 41.9218996,
                                  longitude: -87.6514631,
                                  price_daily: 178)

listing1.images.create!(url: 'https://s3-us-west-1.amazonaws.com/petbnb/images/listings/listing1a.jpg')
listing1.images.create!(url: 'https://s3-us-west-1.amazonaws.com/petbnb/images/listings/listing1b.jpg')
listing1.images.create!(url: 'https://s3-us-west-1.amazonaws.com/petbnb/images/listings/listing1c.jpg')

listing2.images.create!(url: 'https://s3-us-west-1.amazonaws.com/petbnb/images/listings/listing2a.jpg')
listing2.images.create!(url: 'https://s3-us-west-1.amazonaws.com/petbnb/images/listings/listing2b.jpg')

listing3.images.create!(url: 'https://s3-us-west-1.amazonaws.com/petbnb/images/listings/listing3a.jpg')

listing4.images.create!(url: 'https://s3-us-west-1.amazonaws.com/petbnb/images/listings/listing4a.jpg')
listing4.images.create!(url: 'https://s3-us-west-1.amazonaws.com/petbnb/images/listings/listing4b.jpg')

listing5.images.create!(url: 'https://s3-us-west-1.amazonaws.com/petbnb/images/listings/listing5a.jpg')
listing5.images.create!(url: 'https://s3-us-west-1.amazonaws.com/petbnb/images/listings/listing5b.jpg')
listing5.images.create!(url: 'https://s3-us-west-1.amazonaws.com/petbnb/images/listings/listing5c.jpg')
listing5.images.create!(url: 'https://s3-us-west-1.amazonaws.com/petbnb/images/listings/listing5d.jpg')
listing5.images.create!(url: 'https://s3-us-west-1.amazonaws.com/petbnb/images/listings/listing5e.jpg')

listing6.images.create!(url: 'https://s3-us-west-1.amazonaws.com/petbnb/images/listings/listing6a.jpg')
listing6.images.create!(url: 'https://s3-us-west-1.amazonaws.com/petbnb/images/listings/listing6b.jpg')
listing6.images.create!(url: 'https://s3-us-west-1.amazonaws.com/petbnb/images/listings/listing6c.jpg')
listing6.images.create!(url: 'https://s3-us-west-1.amazonaws.com/petbnb/images/listings/listing6d.jpg')

listing7.images.create!(url: 'https://s3-us-west-1.amazonaws.com/petbnb/images/listings/listing7a.jpg')
listing7.images.create!(url: 'https://s3-us-west-1.amazonaws.com/petbnb/images/listings/listing7b.jpg')

listing8.images.create!(url: 'https://s3-us-west-1.amazonaws.com/petbnb/images/listings/listing8a.jpg')
listing8.images.create!(url: 'https://s3-us-west-1.amazonaws.com/petbnb/images/listings/listing8b.jpg')

listing9.images.create!(url: 'https://s3-us-west-1.amazonaws.com/petbnb/images/listings/listing9a.jpg')
listing9.images.create!(url: 'https://s3-us-west-1.amazonaws.com/petbnb/images/listings/listing9b.jpg')
listing9.images.create!(url: 'https://s3-us-west-1.amazonaws.com/petbnb/images/listings/listing9c.jpg')

listing10.images.create!(url: 'https://s3-us-west-1.amazonaws.com/petbnb/images/listings/listing10a.jpg')
listing10.images.create!(url: 'https://s3-us-west-1.amazonaws.com/petbnb/images/listings/listing10b.jpg')
listing10.images.create!(url: 'https://s3-us-west-1.amazonaws.com/petbnb/images/listings/listing10c.jpg')

listing11.images.create!(url: 'https://s3-us-west-1.amazonaws.com/petbnb/images/listings/listing11a.jpg')
listing11.images.create!(url: 'https://s3-us-west-1.amazonaws.com/petbnb/images/listings/listing11b.jpg')

listing12.images.create!(url: 'https://s3-us-west-1.amazonaws.com/petbnb/images/listings/listing12a.jpg')
listing12.images.create!(url: 'https://s3-us-west-1.amazonaws.com/petbnb/images/listings/listing12b.jpg')
listing12.images.create!(url: 'https://s3-us-west-1.amazonaws.com/petbnb/images/listings/listing12c.jpg')

listing13.images.create!(url: 'https://s3-us-west-1.amazonaws.com/petbnb/images/listings/listing13a.jpg')
listing13.images.create!(url: 'https://s3-us-west-1.amazonaws.com/petbnb/images/listings/listing13b.jpg')

listing14.images.create!(url: 'https://s3-us-west-1.amazonaws.com/petbnb/images/listings/listing14a.jpg')
listing14.images.create!(url: 'https://s3-us-west-1.amazonaws.com/petbnb/images/listings/listing14b.jpg')

listing15.images.create!(url: 'https://s3-us-west-1.amazonaws.com/petbnb/images/listings/listing15a.jpg')

listing16.images.create!(url: 'https://s3-us-west-1.amazonaws.com/petbnb/images/listings/listing16a.jpg')
listing16.images.create!(url: 'https://s3-us-west-1.amazonaws.com/petbnb/images/listings/listing16b.jpg')
listing16.images.create!(url: 'https://s3-us-west-1.amazonaws.com/petbnb/images/listings/listing16c.jpg')
listing16.images.create!(url: 'https://s3-us-west-1.amazonaws.com/petbnb/images/listings/listing16d.jpg')
listing16.images.create!(url: 'https://s3-us-west-1.amazonaws.com/petbnb/images/listings/listing16e.jpg')

listing17.images.create!(url: 'https://s3-us-west-1.amazonaws.com/petbnb/images/listings/listing17a.jpg')
listing17.images.create!(url: 'https://s3-us-west-1.amazonaws.com/petbnb/images/listings/listing17b.jpg')
listing17.images.create!(url: 'https://s3-us-west-1.amazonaws.com/petbnb/images/listings/listing17c.jpg')
