(function($) {
  var btcUrl = 'https://btc-e.com/api/3/ticker/btc_usd';
  $.ajax({
    type: 'GET',
    url: btcUrl,
    async: false,
    contentType: "application/json",
    dataType: 'jsonp',
    success: function(data) {
      $('#btc-avg').text('$' + data.btc_usd.last);
    }
  });

  var ltcUrl = 'https://btc-e.com/api/3/ticker/ltc_usd';
  $.ajax({
    type: 'GET',
    url: ltcUrl,
    async: true,
    contentType: "application/json",
    dataType: 'jsonp',
    success: function(data) {
      $('#ltc-avg').text('$' + data.ltc_usd.last);
    }
  });

  var nmcUrl = 'https://btc-e.com/api/3/ticker/nmc_usd';
  $.ajax({
    type: 'GET',
    url: nmcUrl,
    async: true,
    contentType: "application/json",
    dataType: 'jsonp',
    success: function(data) {
      $('#nmc-avg').text('$' + data.nmc_usd.last);
    }
  });

  var ppcUrl = 'https://btc-e.com/api/3/ticker/ppc_usd';
  $.ajax({
    type: 'GET',
    url: ppcUrl,
    async: true,
    contentType: "application/json",
    dataType: 'jsonp',
    success: function(data) {
      $('#ppc-avg').text('$' + data.ppc_usd.last);
    }
  });
})(jQuery);