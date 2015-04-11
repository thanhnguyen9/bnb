PetBnB.Views.ResultsListView = Backbone.View.extend({
  template: JST['listings/results_list'],

  className: 'row search-results',

  initialize: function (options) {
    this._listings = new PetBnB.Collections.Listings();
    this._coords = options.coords;

    this.findListings();

    this.listenTo(this._listings, 'sync', this.render);
  },

  render: function () {
    var content = this.template({
      listings: this._listings
    });
    this.$el.html(content);

    return this;
  },

  
});
