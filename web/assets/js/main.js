var $ = require('jquery');

require('bootstrap-sass');

var req = require('redirectjs');

$("#redirectjs").click(function () {
  req.redirectTo('https://github.com/nioperas06/redirectjs');
})
