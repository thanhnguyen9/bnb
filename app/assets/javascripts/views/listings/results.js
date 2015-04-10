PetBnB.Views.ResultsView = Backbone.View.extend({
  template: JST['listings/results'],

  className: 'row results',

  events: {
  },

  initialize: function (options) {
    this._result = options.result;
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);

    return this;
  }
});
