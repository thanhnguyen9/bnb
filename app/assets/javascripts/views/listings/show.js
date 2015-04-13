PetBnB.Views.ListingShowView = Backbone.View.extend({
  template: JST['listings/show'],

  className: 'listing-show',

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
  }
});
