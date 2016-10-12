(function() {
  'use strict';
  angular.module('Pomodoro')
    .filter('floor', function(){
        return function(n){
            return Math.floor(n);
        };
    })
    .filter('leadingZero', function(){
        return function(n){
            return (n>=0 && n < 10 ? "0":"") + n;
        };
    });;
}());
