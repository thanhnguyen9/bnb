PetBnB.Routers.Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    'results': 'results',
  },

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this._checkin = "";
    this._checkout = "";
    this._location = "";
    this._result = {};
  },

  home: function () {
    var homeView = new PetBnB.Views.HomeView({
      router: this
    });
  },
  
  results: function () {
    var resultsView = new PetBnB.Views.ResultsView({
      result: this._result
    });
    this._swapView(resultsView);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this.$rootEl.html(view.render().$el);
    $('body').removeClass('homepage');
    this._currentView = view;
  }
});
