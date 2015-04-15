PetBnB.Views.MapShowView = Backbone.View.extend({
  attributes: {
    id: 'map-canvas'
  },

  initialize: function () {
    var mapOptions = {
      center: { lat: 37.7577, lng: -122.4376 },
      zoom: 12
    };
    this._map = new google.maps.Map(this.el, mapOptions);
    this._markers = {};

    this.listenTo(this.collection, 'add', this.addMarker);
    this.listenTo(this.collection, 'remove', this.removeMarker);
  },

  initMap: function () {
    this.collection.each(this.addMarker.bind(this));
    this.attachMapListeners();
  },

  attachMapListeners: function () {
    google.maps.event.addListener(this._map, 'idle', this.search.bind(this));
    google.maps.event.addListener(this._map, 'click', this.createListing.bind(this));
  },

  search: function (event) {
    debugger
    event.preventDefault();

    // var $target = $(event.currentTarget);
    // var search_params = $('.search-bar').serializeJSON().search;
    // if (search_params.location === "") {
    //   $('.errors').html("Please enter a search term");
    // } else {
    //   this._router._checkin = search_params.checkin;
    //   this._router._checkout = search_params.checkout;
    //   this._router._location = search_params.location;
    //   var query = "https://maps.googleapis.com/maps/api/geocode/json?address=";
    //   query += search_params.location;
    //   query += "&key=AIzaSyBFim-M4UMUmjfmk1y5ss_Kd7B_3ooi9iM";
    //   $.ajax({
    //     url: query,
    //     type: 'get',
    //     success: function (resp) {
    //       this._router._coords = resp.results[0].geometry.location;
    //       Backbone.history.navigate('results', { trigger: true });
    //     }.bind(this),
    //     error: function (resp) {
    //       console.log("Something went wrong while querying Geocoding");
    //     }
    //   });
    // }
  },

  // Event handlers
  addMarker: function (listing) {
    if (this._markers[listing.id]) { return };
    var view = this;

    var marker = new google.maps.Marker({
      position: { lat: parseFloat(listing.get('latitude')),
                  lng: parseFloat(listing.get('longitude')) },
      map: this._map,
      title: listing.get('name')
    });

    google.maps.event.addListener(marker, 'click', function (event) {
      view.showMarkerInfo(event, marker);
    });

    this._markers[listing.id] = marker;
  },

  createListing: function (event) {
    var listing = new PetBnB.Models.Listing({
      latitude: event.latLng.lat(),
      longtidue: event.latLng.lng()
    });

    listing.save({}, {
      success: function () {
        this.collection.add(listing);
      }.bind(this)
    });
  },

  search: function () {
    // This method will re-fetch the map's collection, using the
    // map's current bounds as constraints on latitude/longitude.

    var mapBounds = this._map.getBounds();
    var ne = mapBounds.getNorthEast();
    var sw = mapBounds.getSouthWest();

    var filterData = {
      lat: [sw.lat(), ne.lat()],
      lng: [sw.lng(), ne.lng()]
    };

    this.collection.fetch({
      data: { filter_data: filterData }
    });
  },

  removeMarker: function (listing) {
    var marker = this._markers[listing.id];
    marker.setMap(null);
    delete this._markers[listing.id];
  },

  showMarkerInfo: function (event, marker) {
    // This event will be triggered when a marker is clicked. Right now it
    // simply opens an info window with the title of the marker. However, you
    // could get fancier if you wanted (maybe use a template for the content of
    // the window?)

    var infoWindow = new google.maps.InfoWindow({
      content: marker.title
    });

    infoWindow.open(this._map, marker);
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
