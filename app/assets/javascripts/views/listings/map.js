PetBnB.Views.MapShowView = Backbone.View.extend({
  attributes: {
    id: 'map-canvas'
  },

  initialize: function (options) {
    PetBnB.map = new google.maps.Map(this.el, options.mapOptions);
    this._markers = {};

    this.listenTo(PetBnB.listings, 'add', this.addMarker);
    this.listenTo(PetBnB.listings, 'remove', this.removeMarker);

    this.initMap();
  },

  initMap: function () {
    PetBnB.listings.each(this.addMarker.bind(this));
    this.attachMapListeners();
  },

  attachMapListeners: function () {
    google.maps.event.addListener(PetBnB.map, 'idle', this.search);
    google.maps.event.addListener(PetBnB.map, 'bounds_changed',
                                  this.setSearchBoxBounds);
    google.maps.event.addListener(PetBnB.searchBox, 'places_changed',
                                  this.refreshMap);
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
      view.toggleMarkerInfo(event, marker);
    });

    this._markers[listing.id] = marker;
  },

  search: function () {
    var min = $('#slider-min').html().slice(1);
    var max = $('#slider-max').html().slice(1);
    PetBnB.search({ min: min, max: max });
  },

  refreshMap: function () {
    if (PetBnB.searchBox.getPlaces()) {
      var coords = PetBnB.searchBox.getPlaces()[0].geometry.location;
      var newBounds = new google.maps.LatLng(coords.lat(),
                                             coords.lng());
      PetBnB.map.setCenter(coords);
      PetBnB.map.setZoom(13);
    }
  },

  setSearchBoxBounds: function () {
    PetBnB.searchBox.setBounds(PetBnB.map.getBounds());
  },

  removeMarker: function (listing) {
    var marker = this._markers[listing.id];
    marker.setMap(null);
    delete this._markers[listing.id];
  },

  toggleMarkerInfo: function (event, marker) {
    this._currentInfoWindow && this._currentInfoWindow.close();
    // make template for this (marker has title, first image, and price)
    this._currentInfoWindow = new google.maps.InfoWindow({
      content: marker.title
    });

    this._currentInfoWindow.open(PetBnB.map, marker);
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
