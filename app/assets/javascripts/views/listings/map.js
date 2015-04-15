PetBnB.Views.MapShowView = Backbone.View.extend({
  attributes: {
    id: 'map-canvas'
  },

  initialize: function (options) {
    var center = (options.center.lat) ? options.center :
                                        { lat: 37.7577, lng: -122.4376 };
    var mapOptions = {
      center: center,
      zoom: 12
    };

    PetBnB.map = new google.maps.Map(this.el, mapOptions);
    this._markers = {};

    this.listenTo(PetBnB.listings, 'add', this.addMarker);
    this.listenTo(PetBnB.listings, 'remove', this.removeMarker);
  },

  initMap: function () {
    PetBnB.listings.each(this.addMarker.bind(this));
    this.attachMapListeners();
  },

  attachMapListeners: function () {
    google.maps.event.addListener(PetBnB.map, 'idle', this.search.bind(this));
    // google.maps.event.addListener(PetBnB.map, 'click', this.createListing.bind(this));
  },

  // Event handlers
  addMarker: function (listing) {
    if (this._markers[listing.id]) { return };
    var view = this;

    var marker = new google.maps.Marker({
      position: { lat: parseFloat(listing.get('latitude')),
                  lng: parseFloat(listing.get('longitude')) },
      map: PetBnB.map,
      title: listing.get('name'),
      images: listing.images(),
      price: listing.get('price_daily')
    });

    google.maps.event.addListener(marker, 'click', function (event) {
      view.showMarkerInfo(event, marker);
    });

    this._markers[listing.id] = marker;
  },

  search: function () {
    // This method will re-fetch the map's collection, using the
    // map's current bounds as constraints on latitude/longitude.

    var mapBounds = PetBnB.map.getBounds();
    var ne = mapBounds.getNorthEast();
    var sw = mapBounds.getSouthWest();

    var searchData = {
      lat: [sw.lat(), ne.lat()],
      lng: [sw.lng(), ne.lng()]
    };

    PetBnB.listings.fetch({
      data: { search: searchData }
    });
  },

  createListing: function (event) {
    var listing = new PetBnB.Models.Listing({
      latitude: event.latLng.lat(),
      longtidue: event.latLng.lng()
    });

    listing.save({}, {
      success: function () {
        PetBnB.listings.add(listing);
      }.bind(this)
    });
  },

  removeMarker: function (listing) {
    var marker = this._markers[listing.id];
    marker.setMap(null);
    delete this._markers[listing.id];
  },

  showMarkerInfo: function (event, marker) {
    // make template for this (marker has title, first image, and price)
    var infoWindow = new google.maps.InfoWindow({
      content: marker.title
    });

    infoWindow.open(PetBnB.map, marker);
  },

  startBounce: function (id) {
    var marker = this._markers[id];
    marker.setAnimation(google.maps.Animation.BOUNCE);
  },

  stopBounce: function (id) {
    var marker = this._markers[id];
    marker.setAnimation(null);
  }
});
