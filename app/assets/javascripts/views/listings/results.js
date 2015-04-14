PetBnB.Views.ResultsView = Backbone.View.extend({
  template: JST['listings/results'],

  className: 'results',

  initialize: function (options) {
    this._checkin = options.checkin;
    this._checkout = options.checkout;
    this._location = options.location;
    this._coords = options.coords;
    this.listings = options.listings;

    this.findListings();

    this.listenTo(this.listings, 'add sync', this.render);
  },

  render: function () {
    var content = this.template({
      checkin: this._checkin,
      checkout: this._checkout,
      listings: this.listings
    });
    this.$el.html(content);

    PetBnB.setDatepickers();

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

    this.listings.fetch({
      data: { search: search },
      error: function (resp) {
        console.log("Something went wrong while getting results");
      }
    });
  }
});
