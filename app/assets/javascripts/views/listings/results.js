PetBnB.Views.ResultsView = Backbone.View.extend({
  template: JST['listings/results'],

  className: 'results',

  events: {
    'change #checkin': 'checkDates',
    'change #checkout': 'checkDates',
    // 'click a.remove-listing': 'destroyListing',
    // 'click a.listing-name': 'panToListing',
    // 'mouseenter .listing': 'startBounce',
    // 'mouseleave .listing': 'stopBounce'
  },

  initialize: function (options) {
    this._coords = options.coords;
    this.collection = options.listings;

    this.mapView = new PetBnB.Views.MapShowView({
      collection: this.collection,
      center: options.coords
    });

    // should probably abstract listings index into its own view
    // this.listingsIndex = new PetBnB.Views.ListingsIndex({
    //   collection: this.collection
    // });

    // this.findListings();

    this.listenTo(this.collection, 'add sync', this.render);
  },

  render: function () {
    var content = this.template({
      listings: this.collection
    });
    this.$el.html(content);

    // do this later
    // this.$('.search-container').html(this.listingsIndex.render().$el);
    this.$('.search-map').html(this.mapView.$el);
    this.mapView.initMap();

    PetBnB.setDatepickers();

    return this;
  },

  findListings: function () {
    var search = {
      latitude: this._coords.lat,
      longitude: this._coords.lng
    };
    if (search.latitude || search.longitude) {
      this.collection.fetch({
        data: { search: search },
        error: function (resp) {
          console.log("Something went wrong while getting results");
        }
      });
    } else {
      // Backbone.history.navigate('', { trigger: true });
      // return;
    }
  },

  // Event handlers
  checkDates: function () {
    // resuse code from home.js
  },

  // startBounce: function (event) {
  //   var listingId = $(event.currentTarget).children('a').data('listing-id');
  //   this.mapView.startBounce(listingId);
  // },
  //
  // stopBounce: function (event) {
  //   var listingId = $(event.currentTarget).children('a').data('listing-id');
  //   this.mapView.stopBounce(listingId);
  // },
  //
  // destroyListing: function (event) {
  //   var listingId = $(event.currentTarget).data('listing-id');
  //   var listing = this.collection.get(listingId);
  //   listing.destroy();
  // },
  //
  // panToListing: function (event) {
  //   var listingId = $(event.currentTarget).data('listing-id');
  //   var marker = this.mapView._markers[listingId];
  //   this.mapView._map.panTo(marker.getPosition());
  // },

  remove: function () {
    Backbone.View.prototype.remove.call(this);
    this.mapView.remove();
    // this.listingsIndex.remove();
  }
});
