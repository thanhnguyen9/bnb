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
    if (button === 'Log in') {
      $form = $('#loginModal form');
    } else if (button === 'Sign up') {
      $form = $('#signupModal form');
    } else {
      console.log('Clicked button ' + button + '?!?!');
    }

    var userData = $form.serializeJSON(), model;
    if (button === 'Log in') {
      model = new PetBnB.Models.Session(userData);
    } else {
      model = new PetBnB.Models.User(userData);
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
