PetBnB.Views.NewListingView = Backbone.View.extend({
  template: JST['listings/new'],

  className: 'listing-new',

  events: {
    'click button': 'submit'
  },

  initialize: function (options) {
    // this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var content = this.template({
      listing: this.model
    });
    this.$el.html(content);

    $('#navbar-search-container').addClass('active');

    return this;
  },

  submit: function (event) {
    event.preventDefault();
    // debugger
    // var data = $('.new-listing-form').serializeJSON();
    // this.model.save({ data: data }, {
    //   success: function (resp) {
    //     debugger
    //   },
    //   error: function (resp) {
    //     debugger
    //   }
    // });
  }
});
