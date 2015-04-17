PetBnB.Routers.Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    'results': 'results',
    'listings/:id': 'listingShow',
    // 'users/:id': 'userShow'
  },

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this._coords = {};
  },

  home: function () {
    var homeView = new PetBnB.Views.HomeView({
      router: this
    });
  },

  results: function () {
    var resultsView = new PetBnB.Views.ResultsView({
      coords: this._coords
    });
    this._swapView(resultsView);
  },

  listingShow: function (id) {
    var listing = PetBnB.listings.getOrFetch(id);
    var listingShowView = new PetBnB.Views.ListingShowView({
      model: listing
    });
    this._swapView(listingShowView);
  },

  // userShow: function (id) {
  //   var user = PetBnB.currentUser;
  //   var userShowView = new PetBnB.Views.UserShowView({
  //     model: user
  //   });
  //   this._swapView(userShowView);
  // },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this.$rootEl.html(view.$el);
    this._currentView = view;
    view.render();
    $('#navbar-search-container').addClass('active');
  }
});
