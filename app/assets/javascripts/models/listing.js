PetBnB.Models.Listing = Backbone.Model.extend({
  urlRoot: 'api/listings',

  user: function () {
    if (!this._user) {
      this._user = new PetBnB.Models.User();
    }

    return this._user;
  },

  images: function () {
    if (!this._images) {
      this._images = new PetBnB.Collections.Images({ listing: this });
    }

    return this._images;
  },

  reservations: function () {

  },

  reviews: function () {

  },

  parse: function (payload) {
    if (payload.images) {
      this.images().set(payload.images);
      delete payload.images;
    }
    if (payload.user) {
      this.user().set(payload.user);
      delete payload.user;
    }

    return payload;
  },

  // find readable location based on lat and lng from listing data
  geocodeLocation: function () {
    var lat = parseFloat(this.get('latitude'));
    var lng = parseFloat(this.get('longitude'));
    if (lat && lng) {
      var latlng = new google.maps.LatLng(lat, lng);
      var geocoder = new google.maps.Geocoder();
      geocoder.geocode({ 'latLng': latlng }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          debugger
          if (results[0]) {
            var city = results[0].formatted_address.split(', ')[1];
            var addr = results[0].formatted_address.split(', ').slice(1).join(', ');
            return addr;
          }
        }
      }.bind(this));
    }

    return "";
  }
});
