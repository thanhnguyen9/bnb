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
    if (button === 'Guest user') {
      userData = { user: { email: 'admin@petbnb.com',
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
        window.location.replace('/users/' + model.id);
      },
      error: function (models, response) {
        var errors = '';
        if (button === 'Log in') {
          errors += 'Incorrect credentials<br>';
        } else {
          if (response.responseJSON) {
            response.responseJSON.forEach(function (error) {
              errors += (error + '<br>');
            });
          }
        }
        $form.find('.errors').html(errors);
      }
    });
  }
});
