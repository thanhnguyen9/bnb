PetBnB.Views.ResultsDetailsView = Backbone.View.extend({
  template: JST['listings/results_details'],

  className: 'row search-details',

  initialize: function (options) {
    this._checkin = options.checkin;
    this._checkout = options.checkout;
    this._location = options.location;
  },

  render: function () {
    var content = this.template({
      checkin: this._checkIn,
      checkout: this._checkOut,
      // location: this._location
    });
    this.$el.html(content);

    return this;
  }
});
