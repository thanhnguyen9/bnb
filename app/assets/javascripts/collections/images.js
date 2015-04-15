PetBnB.Collections.Images = Backbone.Collection.extend({
  model: PetBnB.Models.Image,

  initialize: function (options) {
    this._listing = options.listing;
  }
});
