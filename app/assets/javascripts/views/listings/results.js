PetBnB.Views.ResultsView = Backbone.View.extend({
  template: JST['listings/results'],

  className: 'results',

  events: {
    'change #checkin': 'checkDates',
    'change #checkout': 'checkDates'
    // 'mouseenter .listing': 'startBounce',
    // 'mouseleave .listing': 'stopBounce'
  },

  initialize: function (options) {
    var center = (options.coords.lat) ? options.coords :
                                        { lat: 0, lng: 0 };
    PetBnB.mapView = new PetBnB.Views.MapShowView({
      center: center
    });

    this._resultsSubview = new PetBnB.Views.resultsSubview();

    this.listenToOnce(PetBnB.listings, 'sync', this.render);
  },

  render: function () {
    var content = this.template({
      listings: PetBnB.listings
    });
    this.$el.html(content);

    $(document).attr('title', 'Search | PetBnB');
    $('#navbar-search-container').addClass('active');
    this.addSlider();
    PetBnB.setDatepickers();
    this.$('.search-map').html(PetBnB.mapView.$el);
    google.maps.event.trigger(PetBnB.map, 'resize');
    google.maps.event.trigger(PetBnB.map, 'idle');
    this.$('.search-container').append(this._resultsSubview.render().$el);

    return this;
  },

  addSlider: function () {
    var min = 0;
    var max = PetBnB.listings.getMaxPrice();
    this.updateSliderPrices({ min: min, max: max });

    $('#slider').slider({
      range: true,
      animate: true,
      min: min,
      max: max,
      values: [min, max],
      change: function (event, ui) {
        var prices = { min: ui.values[0], max: ui.values[1] };
        this.filterListings(prices);
      }.bind(this)
    });
  },

  updateSliderPrices: function (prices) {
    $('#slider-min').html('$' + prices.min);
    $('#slider-max').html('$' + prices.max);
  },

  filterListings: function (prices) {
    this.updateSliderPrices(prices);
    PetBnB.search({ min: prices.min, max: prices.max });
  },

  // Event handlers
  checkDates: function () {
    PetBnB.checkDates();
  },

  // startBounce: function (event) {
  //   var listingId = $(event.currentTarget).children('a').data('listing-id');
  //   PetBnB.mapView.startBounce(listingId);
  // },
  //
  // stopBounce: function (event) {
  //   var listingId = $(event.currentTarget).children('a').data('listing-id');
  //   PetBnB.mapView.stopBounce(listingId);
  // },

  remove: function () {
    Backbone.View.prototype.remove.call(this);
    PetBnB.mapView.remove();
    this._resultsSubview.remove();
  }
});
