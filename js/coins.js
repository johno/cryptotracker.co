(function($) {
  var coins = ['btc', 'ltc', 'nmc', 'ppc'];

  coins.forEach(function(coin) {
    updateCoin(coin)
  });
})(jQuery);

function updateCoin(coin) {
  var baseUrl = 'https://btc-e.com/api/3/ticker/';

  $.ajax({
    type: 'GET',
    url: baseUrl + coin + '_usd',
    async: false,
    contentType: "application/json",
    dataType: 'jsonp',
    success: function(data) {
      $('#' + coin + '-avg').text('$' + data[coin + '_usd'].last);
    }
  });
}
