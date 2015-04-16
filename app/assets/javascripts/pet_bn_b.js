window.PetBnB = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    // console.log('Hello from PetBnB!');

    if ($('#logged_in').length) {
      var id = parseInt($('#logged_in').val());
      var currentUser = new PetBnB.Models.User({ id: id });
      currentUser.fetch({
        // success: function () {
        //   console.log('finished fetching current user');
        // }
      });

      PetBnB.listings = new PetBnB.Collections.Listings();
      var input = $('#navbar-search-container input')[0];
      PetBnB.navbarSearch = new google.maps.places.SearchBox(input);

      this.router = new PetBnB.Routers.Router({
        $rootEl: $('#content'),
        currentUser: currentUser
      });
      Backbone.history.start();
    }
  },

  setDatepickers: function () {
    $('#checkin').datepicker();
    $('#checkout').datepicker();
  },

  search: function (options) {
    var mapBounds = PetBnB.map.getBounds();
    var ne = mapBounds.getNorthEast();
    var sw = mapBounds.getSouthWest();
    var minPrice = options.min;
    var maxPrice = options.max;

    var searchData = {
      lat: [sw.lat(), ne.lat()],
      lng: [sw.lng(), ne.lng()],
      min: minPrice,
      max: maxPrice
    };

    PetBnB.listings.fetch({
      data: { search: searchData }
    });
  }
};

$(document).ready(function(){
  PetBnB.initialize();
});
