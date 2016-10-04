(function() {
  'use strict';
  angular.module('Error',[])
  .component('errorHandling', {
    templateUrl: 'scripts/error/errorhandling.template.html',
    controller: ErrorController
  });

  ErrorController.$inject = ['$rootScope']
  function ErrorController($rootScope) {
    var $ctrl = this;
    $ctrl.show = false;
    $ctrl.errors = [];

    var cancelNewErrorListener = $rootScope.$on('error:newerror',
     function (event, data) {
        $ctrl.show = true;
        $ctrl.errors.push(data);
        $ctrl.header = ( data.header === undefined ? "ERROR" : data.header );
        $rootScope.$broadcast('request:processing', {on: false});
      }
    );
    var cancelAckErrorListener = $rootScope.$on('error:ackerror',
     function (event, data) {
       $ctrl.errors = $ctrl.errors.filter(function(item) {
         return data.indexOf(item) < 0;
       });
       $ctrl.show = ($ctrl.errors.length > 0);
      }
    );

    $ctrl.trigger = function() {
      $rootScope.$broadcast('error:newerror', { message : ("testing error messages " + new Date())});
    };
    $ctrl.ack = function(error) {
      $rootScope.$broadcast('error:ackerror' , new Array(error) );
    };
    $ctrl.ackAll = function() {
      $rootScope.$broadcast('error:ackerror', $ctrl.errors );
    };

    $ctrl.$onDestroy = function () {
      cancelNewErrorListener();
      cancelAckErrorListener();
    };

  }

}());
