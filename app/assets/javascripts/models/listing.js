PetBnB.Models.Listing = Backbone.Model.extend({
  urlRoot: 'api/listings',

  user: function () {
    if (!this._user) {
      this._user = new PetBnB.Models.User();
    }

    return this._user;
  },

  images: function () {
    if (!this._images) {
      this._images = new PetBnB.Collections.Images({ listing: this });
    }

    return this._images;
  },

  parse: function (payload) {
    if (payload.images) {
      this.images().set(payload.images);
      delete payload.images;
    }
    if (payload.user) {
      this.user().set(payload.user);
      delete payload.user;
    }

    return payload;
  }
});
