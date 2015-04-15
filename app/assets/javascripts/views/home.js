PetBnB.Views.HomeView = Backbone.View.extend({
  template: _.template(''),

  events: {
    'change #checkin': 'checkDates',
    'change #checkout': 'checkDates',
    'click .btn.search': 'search'
  },

  initialize: function (options) {
    this.$el = $('body');
    this._router = options.router;
  },

  // responds intelligently when user inputs incorrect date
  checkDates: function () {
    var checkin = $('#checkin').val();
    var checkout = $('#checkout').val();
    if (checkin !== "" && checkout !== "") {
      var checkinDate = Date.parse(checkin);
      var checkoutDate = Date.parse(checkout);
      if (checkoutDate - checkinDate < 1) {
        var nextDay = new Date(checkinDate + 86400 * 1000);
        var year = nextDay.getFullYear().toString();
        var month = this.padDate((nextDay.getMonth() + 1).toString());
        var day = this.padDate(nextDay.getDate().toString());
        var newCheckoutDate = [month, day, year].join('/');
        $('#checkout').val(newCheckoutDate);
      }
    }
  },

  padDate: function (date) {
    var newDate = (date.length === 1) ? ('0' + date) : date;

    return newDate;
  },

  search: function (event) {
    event.preventDefault();

    var router = this._router;
    var $target = $(event.currentTarget);
    var search_params = $('.search-bar').serializeJSON().search;
    if (search_params.location === "") {
      $('.errors').html("Please enter a search term");
    } else {
      router._checkin = search_params.checkin;
      router._checkout = search_params.checkout;
      var address = search_params.location;
      var geocoder = new google.maps.Geocoder();
      geocoder.geocode( { 'address': address }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          router._coords = results[0].geometry.location;
          Backbone.history.navigate('results', { trigger: true });
        } else {
          alert("Geocode was not successful for the following reason: " + status);
        }
      });
      //
      // var query = "https://maps.googleapis.com/maps/api/geocode/json?address=";
      // query += search_params.location;
      // query += "&key=AIzaSyBFim-M4UMUmjfmk1y5ss_Kd7B_3ooi9iM";
      // $.ajax({
      //   url: query,
      //   type: 'get',
      //   success: function (resp) {
      //     this._router._coords = resp.results[0].geometry.location;
      //
      //   }.bind(this),
      //   error: function (resp) {
      //     console.log("Something went wrong while querying Geocoding");
      //   }
      // });
    }
  }
});
