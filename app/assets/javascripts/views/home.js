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
    this._router.checkIn = search_params.checkin;
    this._router.checkOut = search_params.checkout;
    if (search_params.location === "") {
      $('.errors').html("Please enter a search term");
    } else {
      debugger
    }
  }
});
