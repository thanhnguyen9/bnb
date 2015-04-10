PetBnB.Views.ResultsView = Backbone.CompositeView.extend({
  template: JST['listings/results'],

  events: {
  },

  initialize: function (options) {
    this._result = options.result;
    this._listings = new PetBnB.Collections.Listings();
    this.findListings();
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);

    return this;
  },

  addContainerView: function () {
    this.addSubview()
  },

  addMapView: function () {

  },

  findListings: function () {
    var coords = this._result.geometry.location;
    var search = {
      latitude: coords.lat,
      longitude: coords.lng
    };
    $.ajax({
      url: '/api/search',
      type: 'get',
      data: { search: search },
      success: function (resp) {
        // debugger
        this.displayListings(resp);
      }.bind(this),
      error: function (resp) {
        debugger
        console.log("Something went wrong while getting search results");
      }
    });
  },

  displayListings: function (listings) {
    listings.forEach(function (listing) {
      var $li = $('<li>');
      $li.addClass('list-group-item');
      $li.html(listing.title);
      $('ul.list-group').append($li);
    });
  }
});

PetBnB.Views.ResultsContainerView = Backbone.View.extend({
  // contains resultsdetail and resultslist
  template: JST['listings/results_container'],

  className: 'col-md-7 search-container',

  initialize: function (options) {
    this._result = options.result;
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);

    return this;
  }
});

PetBnB.Views.ResultsDetailsView = Backbone.View.extend({
  template: JST['listings/results_details'],

  className: 'row search-details',

  initialize: function (options) {
    this._result = options.result;
  },

  render: function () {
    var content = this.template({
      
    });
    this.$el.html(content);

    return this;
  }
});

PetBnB.Views.ResultsListView = Backbone.View.extend({
  template: JST['listings/results_list'],

  className: 'row search-results',

  initialize: function (options) {
    this._result = options.result;
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);

    return this;
  }
});

PetBnB.Views.ResultsMapView = Backbone.View.extend({
  // on the same level as resultscontainer
  template: JST['listings/results_map'],

  className: 'col-md-5 search-map',

  initialize: function (options) {
    this._result = options.result;
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);

    return this;
  }
});
