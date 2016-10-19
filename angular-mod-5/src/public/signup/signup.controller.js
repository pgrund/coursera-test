(function() {
  'use strict';
  angular.module('public')
    .controller('SignupController', SignupController);

  SignupController.$inject = ['MenuService', '$scope'];
  function SignupController(MenuService, $scope) {
    var signupCtrl = this;

    signupCtrl.completed = false;
    signupCtrl.user = MenuService.user;

    signupCtrl.user.firstName = "Peter";
    signupCtrl.user.lastName = "Grund";
    signupCtrl.user.email = "test@test";
    signupCtrl.user.phoneNumber = "123-456-7890";
    signupCtrl.user.favorite = "";

    signupCtrl.go = function () {
      console.log("go!", signupCtrl.user.favorite.short_name);
      signupCtrl.completed = true;
      signupCtrl.user.favorite = MenuService.user.favorite;
      MenuService.user = signupCtrl.user;
    };
  }
}());
