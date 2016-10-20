(function() {
  'use strict';
  angular.module('public')
    .controller('SignupController', SignupController);

  SignupController.$inject = ['MenuService', '$scope'];
  function SignupController(MenuService, $scope) {
    var signupCtrl = this;

    signupCtrl.completed = false;
    signupCtrl.user = MenuService.user;
    signupCtrl.registered = (signupCtrl.user != null & signupCtrl.user != undefined && signupCtrl.user.email);
    signupCtrl.favorite =  (signupCtrl.user.favorite != undefined ? signupCtrl.user.favorite.short_name : '');

    signupCtrl.register = function (user) {
      console.log("user.favorite", user.favorite, "controller favorite", signupCtrl.favorite);
      signupCtrl.completed = true;
      // user.favorite.short_name = signupCtrl.favorite;
      MenuService.user = user;
      signupCtrl.registered = true;
    };
  }
}());
