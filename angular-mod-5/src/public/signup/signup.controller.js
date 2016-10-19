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
    signupCtrl.favorite = '';

    signupCtrl.register = function (user) {
      console.log("registering", user);
      signupCtrl.completed = true;
      signupCtrl.favorite = (user.favorite ? user.favorite.short_name : '');
      MenuService.user = user;
      signupCtrl.registered = true;
    };
  }
}());
