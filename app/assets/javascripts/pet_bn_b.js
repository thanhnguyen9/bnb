window.PetBnB = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    // console.log('Hello from PetBnB!');

    this.checkin = "";
    this.checkout = "";

    if ($('#logged_in').length) {
      var id = parseInt($('#logged_in').val());
      this.currentUser = new PetBnB.Models.User({ id: id });
      this.currentUser.fetch({
        // success: function () {
        //   console.log('finished fetching current user');
        // }
      });

      this.listings = new PetBnB.Collections.Listings();
      var input = $('#navbar-search-container input')[0];
      this.searchBox = new google.maps.places.SearchBox(input);

      this.router = new PetBnB.Routers.Router({
        $rootEl: $('#content'),
        currentUser: PetBnB.currentUser
      });
      Backbone.history.start();
    }
  },
};

$(document).ready(function(){
  PetBnB.initialize();
});
