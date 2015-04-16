PetBnB.Views.HomeView = Backbone.View.extend({
  template: _.template(''),

  events: {
    'change #checkin': 'checkDates',
    'change #checkout': 'checkDates',
    'click .btn.search': 'search'
  },

  initialize: function (options) {
    this.$el = $('body');
    this._router = options.router;

    this.setupAutocomplete();
  },

  setupAutocomplete: function () {
    var input = $('#homepage-searchbox')[0];
    this._searchBox = new google.maps.places.SearchBox(input);
    google.maps.event.addListener(this._searchBox, 'places_changed',
                                 this.search.bind(this));
  },

  // event handlers
  checkDates: function () {
    var dates = PetBnB.checkDates();
    this._router._checkin = dates.checkin;
    this._router._checkout = dates.checkout;
  },

  search: function (event) {
    event && event.preventDefault();

    var self = this;
    var search_params = $('.search-bar').serializeJSON().search;

    if (self._searchBox.getPlaces()) {
      // if using autocomplete
      var loc = self._searchBox.getPlaces()[0].geometry.location;
      self._router._coords.lat = loc.lat();
      self._router._coords.lng = loc.lng();
      Backbone.history.navigate('results', { trigger: true });
    } else {
      if (search_params.location === "") {
        $('.errors').html("Please enter a search term");
      } else {
        // if just typing in address
        var address = search_params.location;
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode( { 'address': address }, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            self._router._coords = results[0].geometry.location;
            Backbone.history.navigate('results', { trigger: true });
          } else {
            alert("Geocode was not successful for the following reason: " + status);
          }
        });
      }
    }
  }
});
