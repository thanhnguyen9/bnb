PetBnB.Views.NavbarSearchView = Backbone.View.extend({
  template: JST['listings/navbar_search'],

  initialize: function () {
    var content = this.template();
    this.$el.html(content);

    this._navbarSearch = new google.maps.places.SearchBox($('input')[0]);
    google.maps.event.addListener(this._navbarSearch, 'places_changed',
                                  this.findListings.bind(this));
  },

  findListings: function (event) {
    // find listings based on event
  }
});
