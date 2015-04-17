PetBnB.Collections.Reservations = Backbone.Collection.extend({
  model: PetBnB.Models.Reservation,

  initialize: function (options) {
    this._booker = options.booker;
  }
});
