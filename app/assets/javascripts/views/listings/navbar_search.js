PetBnB.Views.NavbarSearchView = Backbone.View.extend({
  template: JST['listings/navbar_search'],

  events: {
    'submit': 'refreshMap'
  },

  initialize: function () {
    var content = this.template();
    this.$el.html(content);
  },

  refreshMap: function (event) {
    event && event.preventDefault();
    debugger

    if (this._navbarSearch.getPlaces()) {
      var coords = this._navbarSearch.getPlaces()[0].geometry.location;
      var newBounds = new google.maps.LatLng(coords.lat(),
                                             coords.lng());
      PetBnB.map.setCenter(coords);
      PetBnB.map.setZoom(13);
      Backbone.history.navigate('results', { trigger: true });
    }
  }
});
