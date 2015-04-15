PetBnB.Routers.Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    'results': 'results',
    'listings/:id': 'listingShow',
    'users/:id': 'userShow'
  },

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this._currentUser = options.currentUser;
    this._checkin = "";
    this._checkout = "";
    this._location = "";
    this._coords = {};
    this.listings = options.listings;
  },

  home: function () {
    var homeView = new PetBnB.Views.HomeView({
      router: this
    });
  },

  results: function () {
    var resultsView = new PetBnB.Views.ResultsView({
      location: this._location,
      coords: this._coords,
      listings: this.listings
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

  userShow: function (id) {
    var user = this._currentUser;
    var userShowView = new PetBnB.Views.UserShowView({
      model: user
    });
    this._swapView(userShowView);
  },

  mapShow: function () {
    var view = new PetBnB.Views.MapShowView();
    this._swapView(view);
    view.initMap();
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this.$rootEl.html(view.$el);
    this._currentView = view;
    view.render();
  }
});
