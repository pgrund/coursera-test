(function() {
  'use strict';
  angular.module('public')
    .controller('SignupController', SignupController);

  SignupController.$inject = ['MenuService', '$scope'];
  function SignupController(MenuService, $scope) {
    var signupCtrl = this;

    signupCtrl.completed = false;
    signupCtrl.user = MenuService.user;
    signupCtrl.registered = MenuService.registered;
    signupCtrl.favorite = '';

    signupCtrl.go = function () {
      console.log("go!", signupCtrl.favorite, signupCtrl.user);
      signupCtrl.completed = true;
      signupCtrl.favorite = MenuService.user.favorite.short_name;
      MenuService.user = signupCtrl.user;
      signupCtrl.registered = true;
    };
  }
}());
