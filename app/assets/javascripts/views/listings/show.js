PetBnB.Views.ListingShowView = Backbone.View.extend({
  template: JST['listings/show'],

  className: 'listing-show',

  events: {
    'change #checkin': 'getTotalNights',
    'change #checkout': 'getTotalNights'
  },

  initialize: function (options) {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var content = this.template({
      listing: this.model
    });
    this.$el.html(content);

    PetBnB.setDatepickers();
    this.getAddress();
    this.getTotalNights();

    return this;
  },

  // find readable location based on lat and lng from listing data
  getAddress: function () {
    var lat = parseFloat(this.model.get('latitude'));
    var lng = parseFloat(this.model.get('longitude'));
    if (lat && lng) {
      var latlng = new google.maps.LatLng(lat, lng);
      var geocoder = geocoder = new google.maps.Geocoder();
      geocoder.geocode({ 'latLng': latlng }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          if (results[1]) {
            $('.address').html(results[1].formatted_address);
          }
        }
      });
    }
  },

  // calculates number of nights based on checkin and checkout dates
  // responds to erroneous input
  getTotalNights: function () {
    var checkin = $('#checkin').val();
    var checkout = $('#checkout').val();
    if (checkin !== "" && checkout !== "") {
      var checkinDate = Date.parse(checkin) / 1000 / 3600 / 24;
      var checkoutDate = Date.parse(checkout) / 1000 / 3600 / 24;
      if (checkoutDate - checkinDate > 0) {
        $('.booking-errors').removeClass('enabled');
        $('.booking-details').addClass('enabled');
        $('#total-nights').html(checkoutDate - checkinDate);

      } else {
        $('.booking-details').removeClass('enabled');
        $('.booking-errors').addClass('enabled');
      }
    } else {
      $('.booking-details').removeClass('enabled');
      $('.booking-errors').addClass('enabled');
    }
  }
});
