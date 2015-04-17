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

  reviews: function () {

  },

  parse: function (payload) {
    if (payload.reservations) {
      this.reservations().set(payload.reservations);
      delete payload.reservations;
    }

    return payload;
  }
});
