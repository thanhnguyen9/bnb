PetBnB.Collections.Listings = Backbone.Collection.extend({
  url: 'api/search',

  model: PetBnB.Models.Listing,

  getOrFetch: function (id) {
    var listing = this.get(id);
    if (!listing) {
      listing = new PetBnB.Models.Listing({ id: id });
      listing.fetch({
        success: function () {
          this.add(listing);
        }.bind(this)
      });
    } else {
      listing.fetch();
    }

    return listing;
  },

  getMinMaxPrices: function () {
    var min = 1000, max = 0;
    this.each(function (listing) {
      var price = listing.get('price_daily');
      if (price < min) {
        min = price;
      }
      if (price > max) {
        max = price;
      }
    });

    return [min, max];
  }
});
