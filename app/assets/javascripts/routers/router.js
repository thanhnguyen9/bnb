PetBnB.Routers.Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    'results': 'results',
    'listings/:id': 'listingShow'
  },

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this._checkin = "";
    this._checkout = "";
    this._location = "";
    this._coords = {};
    this.listings = new PetBnB.Collections.Listings();
  },

  home: function () {
    var homeView = new PetBnB.Views.HomeView({
      router: this
    });
  },

  results: function () {
    var resultsView = new PetBnB.Views.ResultsView({
      checkin: this._checkIn,
      checkout: this._checkOut,
      location: this._location,
      coords: this._coords
    });
    this._swapView(resultsView);
  },

  listingShow: function (id) {
    var listing = this.listings.getOrFetch(id);
    var listingShowView = new PetBnB.Views.ListingShowView({
      model: listing
    });
    this._swapView(listingShowView);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this.$rootEl.html(view.render().$el);
    $('body').removeClass('homepage');
    this._currentView = view;
  }
});
