PetBnB.Models.User = Backbone.Model.extend({
  urlRoot: '/users',

  reservations: function () {
    if (!this._reservations) {
      this._reservations = new PetBnB.Collections.Reservations({
        booker: this
      });
    }

    return this._reservations;
  },

  listings: function () {
    if (!this._listings) {
      this._listings = new PetBnB.Collections.Listings();
    }

    return this._listings;
  },

  parse: function (payload) {
    if (payload.reservations) {
      this.reservations().set(payload.reservations);
      delete payload.reservations;
    }
    if (payload.listings) {
      this.listings().set(payload.listings);
      delete payload.listings;
    }

    return payload;
  }
});
