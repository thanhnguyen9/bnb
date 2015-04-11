PetBnB.Views.ResultsView = Backbone.View.extend({
  template: JST['listings/results'],

  className: 'results',

  initialize: function (options) {
    this._checkin = options.checkin;
    this._checkout = options.checkout;
    this._location = options.location;
    this._coords = options.coords;
    this._listings = new PetBnB.Collections.Listings();

    this.findListings();

    this.listenTo(this._listings, 'add', this.render);
  },

  render: function () {
    var content = this.template({
      checkin: this._checkin,
      checkout: this._checkout,
      listings: this._listings
    });
    this.$el.html(content);

    return this;
  },

  findListings: function () {
    var search = {
      latitude: this._coords.lat,
      longitude: this._coords.lng
    };
    if (!search.latitude || !search.longitude) {
      Backbone.history.navigate('', { trigger: true });
      return;
    }
    $.ajax({
      url: '/api/search',
      type: 'get',
      data: { search: search },
      success: function (resp) {
        this._listings.add(resp);
      }.bind(this),
      error: function (resp) {
        console.log("Something went wrong while getting results");
      }
    });
  }
});
