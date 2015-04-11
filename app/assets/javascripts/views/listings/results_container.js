PetBnB.Views.ResultsContainerView = Backbone.CompositeView.extend({
  template: JST['listings/results_container'],

  initialize: function (options) {
    this._checkin = options.checkin;
    this._checkout = options.checkout;
    this._location = options.location;
    this._coords = options.coords;

    this.addDetailsView();
    this.addListView();
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();

    return this;
  },

  addDetailsView: function () {
    var detailsView = new PetBnB.Views.ResultsDetailsView({
      checkin: this._checkIn,
      checkout: this._checkOut,
      location: this._location,
      coords: this._coords
    });
    this.addSubview('.search-container', detailsView);
  },

  addListView: function () {
    var listView = new PetBnB.Views.ResultsListView({
      coords: this._coords
    });
    this.addSubview('.search-container', listView);
  }
});
