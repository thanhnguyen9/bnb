PetBnB.Routers.Router = Backbone.Router.extend({
  routes: {
    '': 'home'
  },

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  home: function () {
    var homeView = new PetBnB.Views.HomeView();
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this.$rootEl.html(view.render().$el);
    this._currentView = view;
  }
});
