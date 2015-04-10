PetBnB.Routers.DemoRouter = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = $(options.rootEl);
  },

  routes: {
    '': 'demo'
  },

  demo: function () {
    var view = new PetBnB.Views.DemoMap();
    this._swapView(view);
  },

  _swapView: function () {
    // 2 lines
    // must insert $el before initializing maps object; beware of this
    //in any views that contain a map subview
    this.$rootEl.html(view.$el);
    view.render();
  }
})
