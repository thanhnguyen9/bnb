PetBnB.Views.ResultsMapView = Backbone.View.extend({
  // on the same level as resultscontainer
  template: JST['listings/results_map'],

  className: 'col-md-5 search-map',

  initialize: function (options) {
    this._location = options.location;
  },

  render: function () {
    var content = this.template({
      location: this._location
    });
    this.$el.html(content);

    return this;
  }
});
