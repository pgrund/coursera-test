(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['items', '$rootScope'];
function CategoriesController(items, $rootScope) {
  var cat = this;
  cat.items = items;

  cat.$onInit = function () {
    cat.cancel = $rootScope.$on('$stateChangeError',
      function(event, toState, toParams, fromState, fromParams, error){
        console.log(error);
    });
  }
  cat.$onDestroy = function() {
    cat.cancel();
  }

}

})();
