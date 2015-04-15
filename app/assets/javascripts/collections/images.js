PetBnB.Collections.Images = Backbone.Collection.extend({
  url: 'api/images',

  model: PetBnB.Models.Image,

  initialize: function (options) {
    this._listing = options.listing;
  }
});
