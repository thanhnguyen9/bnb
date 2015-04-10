# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!(email: 'Guest', password: 'password')
amy = User.create!(email: 'Amy', password: 'amyamyamy')

listing1 = Listing.create!(user_id: amy.id,
                          name: 'Cozy cat heaven in Noe Valley',
                          description: 'Give your cat the royal treatment when you go on vacation by leaving him or her at my place :) I will make sure to love him or her as much (or even more than) you do!',
                          latitude: 37.7502378,
                          longitude: -122.4337029,
                          price_daily: 10,
                          price_weekly: 50)

listing2 = Listing.create!(user_id: amy.id,
                          name: "Your kitty's home away from home",
                          description: "Your kitty will feel right at home here; I'm an experienced catsitter and have been doing this for more than 10 years. Go to http://www.yelp.com/biz/pets-love-amy-oakland to check out my reviews!",
                          latitude: 37.8043637,
                          longitude: -122.2711137,
                          price_daily: 0,
                          price_weekly: 0)
