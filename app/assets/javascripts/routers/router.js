PetBnB.Routers.Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    'search': 'search'
  },

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    // need to save check in/out dates from search
  },

  home: function () {
    var homeView = new PetBnB.Views.HomeView();
  },

  // for route != home need to remove class .homepage to remove bg

  search: function () {
    $('body').removeClass('homepage');
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this.$rootEl.html(view.render().$el);
    this._currentView = view;
  }
});
