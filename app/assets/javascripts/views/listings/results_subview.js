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
    this.resize();

    return this;
  },

  resize: function () {
    var mapHeight = $('.search-map').height();
    var searchDetailsHeight = $('.search-details').height();
    var newHeight = mapHeight - searchDetailsHeight;
    this.$el.css('height', newHeight + 'px');
  }
});
