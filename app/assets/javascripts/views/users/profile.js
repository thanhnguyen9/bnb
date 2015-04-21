PetBnB.Views.ProfileView = Backbone.View.extend({
  template: JST['users/profile'],

  className: 'user-profile',

  initialize: function (options) {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var reservations = this.model.reservations();
    var content = this.template({
      user: this.model,
      reservations: reservations
    });
    this.$el.html(content);
    $('#navbar-search-container').addClass('active');

    return this;
  }
});
