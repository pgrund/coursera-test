(function() {
  'use strict';
  angular.module('common')
    .directive('menuitem', ['ApiPath', 'MenuService', '$timeout', '$q', function(ApiPath, MenuService, $timeout, $q) {
      return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
          ctrl.$asyncValidators.menuitem = function(modelValue, viewValue) {
            if (ctrl.$isEmpty(modelValue)) {
              // consider empty model valid
              return $q.when();
            }
            var def = $q.defer();
            $timeout(function(){
              MenuService.getCheckMenuItem(modelValue).then(function(p){
                // console.log(p, modelValue, viewValue);
                if(p != undefined) {
                  def.resolve();
                } else {
                  def.reject();
                };
              });
            },2000);
            return def.promise;
          };
        }
      };
    }])
}());
