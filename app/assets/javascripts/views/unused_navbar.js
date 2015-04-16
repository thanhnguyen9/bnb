PetBnB.Views.NavbarView = Backbone.View.extend({
  template: JST['navbar'],

  events: {
  },

  initialize: function (options) {
    // this.email = options.email;
  },

  render: function () {
    var content = this.template({
      // email: this.email
    });
    this.$el.html(content);

    var input = this.$('#navbar-search-container input')[0];
    if (input) {
      debugger
      PetBnB.searchBox = new google.maps.places.SearchBox(input);
    }

    return this;
  }
});
