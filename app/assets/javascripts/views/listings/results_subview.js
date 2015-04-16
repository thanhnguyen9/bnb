PetBnB.Views.resultsSubview = Backbone.View.extend({
  template: JST['listings/results_subview'],

  className: 'row search-results',

  initialize: function () {
    this.listenTo(PetBnB.listings, 'add sync', this.render);
  },

  render: function () {
    var content = this.template({
      listings: PetBnB.listings
    });
    this.$el.html(content);

    return this;
  }
});
