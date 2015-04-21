PetBnB.Views.UserShowView = Backbone.View.extend({
  template: JST['users/show'],

  className: 'user-show',

  initialize: function (options) {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var content = this.template({
      user: this.model
    });
    this.$el.html(content);
    $('#navbar-search-container').addClass('active');

    return this;
  }
});
