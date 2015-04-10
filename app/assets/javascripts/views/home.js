PetBnB.Views.HomeView = Backbone.View.extend({
  template: _.template(''),

  events: {
    'click .btn:not(.search)': 'submit',
    'click .btn.search': 'search'
  },

  initialize: function (options) {
    this.$el = $('body');
    this._router = options.router;
  },

  submit: function (event) {
    event.preventDefault();

    var $target = $(event.currentTarget);
    var $form, button = $.trim($target.text());
    if (button === 'Sign up') {
      $form = $('#signupModal form');
    } else {
      $form = $('#loginModal form');
    }

    var userData, model;
    if (button === 'Guest login') {
      userData = { user: { email: 'Guest',
                           password: 'password' }};
    } else {
      userData = $form.serializeJSON();
    }

    if (button === 'Sign up') {
      model = new PetBnB.Models.User(userData);
    } else {
      model = new PetBnB.Models.Session(userData);
    }
    model.save({}, {
      success: function () {
        window.location.replace('');
      },
      error: function (models, response) {
        var errors = '';
        if (button === 'Sign up') {
          if (response.responseJSON) {
            response.responseJSON.forEach(function (error) {
              errors += (error + '<br>');
            });
          }
        } else {
          errors += 'Incorrect credentials<br>';
        }
        $form.find('.errors').html(errors);
      }
    });
  },

  search: function (event) {
    event.preventDefault();

    var $target = $(event.currentTarget);
    var search_params = $('.search-bar').serializeJSON().search;
    if (search_params.location === "") {
      $('.errors').html("Please enter a search term");
    } else {
      this._router._checkin = search_params.checkin;
      this._router._checkout = search_params.checkout;
      this._router._location = search_params.location;
      var query = "https://maps.googleapis.com/maps/api/geocode/json?address=";
      query += search_params.location;
      query += "&key=AIzaSyBFim-M4UMUmjfmk1y5ss_Kd7B_3ooi9iM";
      $.ajax({
        url: query,
        type: 'get',
        success: function (resp) {
          this._router._result = resp.results[0];
          Backbone.history.navigate('results', { trigger: true });
        }.bind(this),
        error: function (resp) {
          console.log("Something went wrong while querying Geocoding");
        }
      });
    }
  }
});
