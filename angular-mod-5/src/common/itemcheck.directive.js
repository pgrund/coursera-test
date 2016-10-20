(function() {
  'use strict';
  angular.module('common')
    .directive('menuitem', ['ApiPath', 'MenuService', '$timeout', '$q', function(ApiPath, MenuService, $timeout, $q) {
      return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
          ctrl.$asyncValidators.menuitem = function(modelValue, viewValue) {
            var def = $q.defer();
            if (ctrl.$isEmpty(modelValue)) {
              // consider empty model valid
              if(MenuService.user){
                delete MenuService.user.favorite;
              };
              def.resolve();
            } else {
              MenuService.getCheckMenuItem(modelValue).then(function(p){
                if(p != undefined) {
                  def.resolve();
                } else {
                  def.reject();
                };
              });
            };
            return def.promise;
          };
        }
      };
    }])
}());
