(function () {
'use strict';

angular.module('Spinner', [])
.component('loadingSpinner', {
  templateUrl: 'scripts/spinner/loadingspinner.template.html',
  controller: SpinnerController,
  transclude: true
});


SpinnerController.$inject = ['$rootScope']
function SpinnerController($rootScope) {
  var $ctrl = this;
  $ctrl.showSpinner = true;
  var cancelListener = $rootScope.$on('request:processing',
   function (event, data) {
      $ctrl.showSpinner = data.on
    }
  );

  $ctrl.trigger = function() {
    $rootScope.$broadcast('request:processing', {on: (!$ctrl.showSpinner)});
  }

  $ctrl.$onDestroy = function () {
    cancelListener();
  };

};

})();
