window.PetBnB = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    // console.log('Hello from PetBnB!');
    // this.router = new PetBnB.Routers.DemoRouter({
    //   $rootEl: $('#content')
    // });

    if ($('#logged_in').length) {
      var id = parseInt($('#logged_in').val());
      var currentUser = new PetBnB.Models.User({ id: id });
      currentUser.fetch({
        // success: function () {
        //   console.log('finished fetching current user');
        // }
      });

      PetBnB.listingResults = new PetBnB.Collections.Listings();

      this.router = new PetBnB.Routers.Router({
        $rootEl: $('#content'),
        currentUser: currentUser,
        listings: PetBnB.listingResults
      });
      Backbone.history.start();
    }
  },

  setDatepickers: function () {
    $('#checkin').datepicker();
    $('#checkout').datepicker();
  }
};

$(document).ready(function(){
  PetBnB.initialize();
});
