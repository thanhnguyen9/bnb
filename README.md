# PetBnB

[Heroku link][heroku]

[heroku]: http://petbnb.herokuapp.com

## Minimum Viable Product
PetBnB is AirBnB for pets, built on Rails and Backbone. Users can:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [ ] Create accounts
- [ ] Create sessions (log in)
- [ ] Browse home page for sample listings
- [ ] Create new listings
- [ ] Search by location and check in/out date
- [ ] See search results:
  - [ ] As "previews" with images and prices
  - [ ] On a map with pins next to the results
- [ ] See listing details on its own page:
  - [ ] Multiple images
  - [ ] Brief owner's info
  - [ ] Description
  - [ ] Dates to book
  - [ ] Reviews
- [ ] Leave reviews on listings and user profiles
- [ ] Save listings to a wishlist
- [ ] See other users' profiles with:
  - [ ] Listings
  - [ ] Reviews

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication and Home Page (~1 day)
I will implement user authentication in Rails based on the practices
learned at App Academy. Users will sign up or log in with a modal form
similar to the one on AirBnB's home page, and be able to view their
profiles upon signup.
By the end of this phase, users will be able to browse the home page to
learn more about PetBnB and see sample listings. The layout will be a
similar one as AirBnB's home page. The most important part of this phase
will be laying out the grid system (I will be using buttons as
placeholders and eventually replace them with images in phase 4). The
app will be pushed to Heroku at the end of the day.

[Details][phase-one]

### Phase 2: Search (~2 days)
I will add search functionality to the home page, which will allow users
to enter the location and check in/out dates similar to AirBnB's search
box on the home page. Search results will initially only show the
listing titles (to be improved upon in phase 3). Each listing's show
page will display the listing's data in JSON (to be improved upon in
phase 4).

[Details][phase-two]

### Phase 3: Interactive Home Page and Listing Details (~2 days)
I will be replacing the buttons on the home page with actual images that
link to sample listings. These will be populated in the database.
I will modify the listing detail pages with more information, mimicking
the AirBnB listing detail page.
Users will be able to favorite listings from the detail page or the
search results page. Users will also be able to edit their profiles.

[Details][phase-three]

### Phase 4: Better Search Results and Reservations (~2 days)
I will improve the search results page by adding images and other
details to the listing titles (like on AirBnB); the original search
criteria will also be displayed on top of the results so that users can
modify searches on the fly. I will also display a map (using a third
party API to integrate Google Maps).
Users will be able to book a pet host for specified dates by going to
a listing's detail page.

[Details][phase-four]

### Phase 5: Reviews and Wrapping Up (~1-2 days)
I will add the ability for users to leave reviews on both listings and
other users. These will be shown on the bottom of a listing detail page
or a user's profile page. This will be implemented with a polymorphic
association that connects reviews to either users or listings.
I will do any styling needed for the pages from previous days that still
need styling, and standardize the format across the whole site.


[Details][phase-five]

### Bonus Features (TBD)
- [ ] Email activation / password reset
- [ ] Messaging between users
- [ ] Notifications when another user respond to your message
- [ ] Suggest hosts near user's location on home page
- [ ] Create new listings
- [ ] Save the five most recent searches
- [ ] Show listing's location on a map on bottom of listing detail page
- [ ] Sharing listings via email or social networks

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
