(function() {
  'use strict';
  angular.module('common')
    .controller('MyInfoController', ['user', function(user) {
      var infoCtrl = this;
      infoCtrl.user = user;

      infoCtrl.registered = (infoCtrl.user.email != undefined);
    }])
}());
