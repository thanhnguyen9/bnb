PetBnB.Routers.Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    'login': 'loginModal',
    'signup': 'signupModal'
  },

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  home: function () {

  },

  loginModal: function () {

  },

  signupModal: function () {

  }
});
