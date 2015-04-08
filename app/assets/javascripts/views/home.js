PetBnB.Views.HomeView = Backbone.View.extend({
  template: _.template(''),

  events: {
    'click button': 'submit'
  },

  initialize: function () {
    this.$el = $('#modals');
    // this.$('.errors').empty();
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
  }
});