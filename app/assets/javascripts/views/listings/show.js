PetBnB.Views.ListingShowView = Backbone.View.extend({
  template: JST['listings/show'],

  className: 'listing-show',

  events: {
    'change #checkin': 'getTotalNights',
    'change #checkout': 'getTotalNights',
    'click #booking-button': 'instantBook'
  },

  initialize: function (options) {
    this.listenTo(this.model, 'sync', this.render);
    google.maps.event.addListener(PetBnB.searchBox, 'places_changed',
                                  this.goToResults);
  },

  render: function () {
    var content = this.template({
      listing: this.model,
      images: this.model.images(),
      user: this.model.user()
    });
    this.$el.html(content);

    PetBnB.setDatepickers();
    this.getAddress();
    this.getTotalNights();

    return this;
  },

  // find readable location based on lat and lng from listing data
  getAddress: function () {
    var lat = parseFloat(this.model.get('latitude'));
    var lng = parseFloat(this.model.get('longitude'));
    if (lat && lng) {
      var latlng = new google.maps.LatLng(lat, lng);
      var geocoder = geocoder = new google.maps.Geocoder();
      geocoder.geocode({ 'latLng': latlng }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          if (results[0]) {
            var city = results[0].formatted_address.split(', ')[1];
            var title = this.model.get('name') + ' in ' + city;
            var addr = results[0].formatted_address.split(', ').slice(1).join(', ');
            $('.address').html(addr);
            $(document).attr('title', title);
          }
        }
      }.bind(this));
    }
  },

  // calculates number of nights based on checkin and checkout dates
  // responds to erroneous input
  getTotalNights: function () {
    PetBnB.checkDates(); // save dates for later reference
    var checkin = $('#checkin').val();
    var checkout = $('#checkout').val();
    if (checkin !== "" && checkout !== "") {
      if (checkout > checkin) {
        // $('.booking-errors').removeClass('enabled');
        $('.panel-padding-fit').addClass('enabled');
        $('.booking-button').addClass('enabled');

        var checkinDate = Date.parse(checkin) / 1000 / 3600 / 24;
        var checkoutDate = Date.parse(checkout) / 1000 / 3600 / 24;
        var totalNights = checkoutDate - checkinDate;
        var priceDaily = parseInt(this.model.get('price_daily'));
        $('#total-nights').html(totalNights);
        $('#cost-breakdown-2').html('$' + priceDaily * totalNights);
        $('#cost-breakdown-total').html($('#cost-breakdown-2').html());
      } else {
        $('.panel-padding-fit').removeClass('enabled');
        $('.booking-button').removeClass('enabled');
        // $('.booking-errors').addClass('enabled');
      }
    } else {
      $('.panel-padding-fit').removeClass('enabled');
      // $('.booking-errors').removeClass('enabled');
      $('.booking-button').addClass('enabled');
    }
  },

  instantBook: function (event) {
    if ($('#checkin').val() === "") {
      $('#checkin').focus();
    } else if ($('#checkout').val() === "") {
      $('#checkout').focus();
    } else {
      var checkin = $('#checkin').val();
      var checkout = $('#checkout').val();
      var reservationData = {
        listing_id: this.model.id,
        start_date: checkin,
        end_date: checkout
      };
      var reservation = new PetBnB.Models.Reservation();
      reservation.save({ reservation: reservationData }, {
        success: function () {
          PetBnB.currentUser.reservations().add(reservation);
          debugger
        },
        error: function () {
          debugger
        }
      });
    }
  },

  goToResults: function () {
    if (PetBnB.searchBox.getPlaces()) {
      PetBnB.goToResults({
        searchBox: PetBnB.searchBox
      });
    }
  }
});
