(function() {
  'use strict';
  angular.module('Calculator')
  .filter('display', function() {
    return function(display, value) {
      var res = display;
      if(value && value != null && value.trim().length > 0) {
        // => some value being entered
        // show only last number
        var match = value.match(/([0-9\.]+)[+-\/*]?$/);
        if(match) {
          res = match[1];
        } else {
          var visible = value.replace(/[+-\/*]+/, '');
          res = (visible.length > 0 ? visible : display);
        }
      }
      // limit visible chars
      return (""+res).substr(0,11);
    };
  });
}());
