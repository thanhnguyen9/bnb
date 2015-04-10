PetBnB.Views.DemoMap = Backbone.View.extend({
  initialize: function (options) {
    var mapOptions = {
      center: { lat: -34.397, lng: 150.644},
      zoom: 8
    };
    // modified original code to use this.el because it doesn't require
    // the map object to be on the page

    // use instance variable to store map
    this._map = new google.maps.Map(this.$el, mapOptions);
    this._markers = {};

    // must set height (map will fill whole parent div)

    // should only create google.maps.Map once

    // listen for add events
    this.listenTo(this.collection, 'add', this.addMarker);
    this.listenTo(this.collection, 'remove', this.removeMarker);
  },

  addMarker: function (model, collection) {
    console.log(model.id);
    // check documentation for marker intiialization exmaple
    // myLatLng.lat(), don't just index into them
    var marker = new google.maps.marker({
      position: { lat: 0, lng: 0 },
      map: this._map,
      title: "I AM YO MARKER"
    });
    this._markers[model.id] = marker;
  },

  removeMarker: function (model) {
    this._markers[model.id] = null; // no real way to delete marker
    delete this._markers[model.id];
  }
});
