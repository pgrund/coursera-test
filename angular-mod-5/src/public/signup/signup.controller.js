(function() {
  'use strict';
  angular.module('public')
    .controller('SignupController', SignupController);

  SignupController.$inject = ['MenuService', '$scope'];
  function SignupController(MenuService, $scope) {
    var signupCtrl = this;

    signupCtrl.completed = false;
    signupCtrl.user = MenuService.user;

    signupCtrl.go = function () {
      console.log("go!", signupCtrl.user.favorite.short_name);
      signupCtrl.completed = true;
      signupCtrl.user.favorite = MenuService.user.favorite;
      MenuService.user = signupCtrl.user;
    };
  }
}());
