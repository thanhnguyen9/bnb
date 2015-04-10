PetBnB.Views.ProfileView = Backbone.View.extend({
  template: JST['profile'],

  events: {
  },

  initialize: function (options) {
    this.email = options.email;
  },

  render: function () {
    var content = this.template({
      email: this.email
    })
    this.$el.html(content);

    return this;
  }
});
