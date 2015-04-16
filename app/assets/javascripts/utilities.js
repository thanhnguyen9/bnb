window.PetBnB.setDatepickers = function () {
  $('#checkin').datepicker();
  $('#checkout').datepicker();
};

window.PetBnB.checkDates = function () {
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
      checkout = [month, day, year].join('/');
      $('#checkout').val(checkout);
    }
    PetBnB.checkin = checkin;
    PetBnB.checkout = checkout;
  }
};

window.PetBnB.padDate = function (date) {
  var newDate = (date.length === 1) ? ('0' + date) : date;

  return newDate;
};

window.PetBnB.search = function (options) {
  var mapBounds = PetBnB.map.getBounds();
  var ne = mapBounds.getNorthEast();
  var sw = mapBounds.getSouthWest();
  var minPrice = options.min;
  var maxPrice = options.max;

  var searchData = {
    lat: [sw.lat(), ne.lat()],
    lng: [sw.lng(), ne.lng()],
    min: minPrice,
    max: maxPrice
  };

  PetBnB.listings.fetch({
    data: { search: searchData }
  });
};
