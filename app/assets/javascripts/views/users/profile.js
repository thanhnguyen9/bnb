PetBnB.Views.ProfileView = Backbone.View.extend({
  template: JST['users/profile'],

  className: 'user-profile',

  initialize: function (options) {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var content = this.template({
      user: this.model
    });
    this.$el.html(content);

    return this;
  }
});
