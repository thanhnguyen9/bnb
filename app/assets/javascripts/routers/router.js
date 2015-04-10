PetBnB.Routers.Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    'search': 'search'
  },

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this._checkIn = "";
    this._checkOut = "";
  },

  home: function () {
    var homeView = new PetBnB.Views.HomeView({
      router: this
    });
  },

  // for route != home need to remove class .homepage to remove bg

  search: function () {
    $('body').removeClass('homepage');
    var searchView = new PetBnB.Views.SearchView();
    this._swapView(SearchView);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this.$rootEl.html(view.render().$el);
    this._currentView = view;
  }
});
