(function() {
  'use strict';
  angular.module('Calculator')
    .controller('CalculatorController', CalculatorController);

  CalculatorController.$inject = ['$document','$scope'];
  function CalculatorController($document, $scope) {
    var calcCtrl = this;

    calcCtrl.memory = 0;
    calcCtrl.value = '';
    calcCtrl.display = '';

    calcCtrl.allClear = function(){
      calcCtrl.memory = 0;
      calcCtrl.value = '';
      calcCtrl.display = '';
    };
    calcCtrl.clearEntry = function(){
      calcCtrl.value = '';
      calcCtrl.display = '';
    };

    var normalizeValue = function(val) {
        return val
        // replace duplicates
          .replace(/\.+/,'.')
          .replace(/\++/,'+')
          .replace(/\-+/,'-')
          .replace(/\/+/,'/')
          .replace(/\*+/,'*')
        // multiple commands, take last one
          .replace(/[+|-|\/|\*]+([+|-|\/|\*])/, "$1")
        // ends with command, ignore
          .replace(/[+-\/\*]+$/,'')
        // trim leading zeros
          .replace(/^0+/, '');
    }
    calcCtrl.result = function(){
      // if input starts with number, reset memory
      if(calcCtrl.value.match(/^\d/) && calcCtrl.memory != 0){
        calcCtrl.memory = 0;
      }
      var norm = (calcCtrl.memory > 0 ? calcCtrl.memory : '') + "" + normalizeValue(calcCtrl.value);
      calcCtrl.display = eval (norm);
      calcCtrl.memory = calcCtrl.display;
      calcCtrl.value = '';
    };

    $document.bind('keyup', function($event){
          // 0-9 key pressed
          if(($event.keyCode <= 57 && $event.keyCode >= 48) ||
              ($event.keyCode <= 105 && $event.keyCode >= 96)){
            calcCtrl.value = calcCtrl.value + ""+ $event.key;
          } else {
            switch($event.keyCode) {
              case 107: case 109: case 106: case 111:
                calcCtrl.value = calcCtrl.value + ""+ $event.key;
                break;
              case 46: case 110:
                calcCtrl.value = calcCtrl.value + ".";
                break;
              case 13:
                calcCtrl.result();
                break;
              default:
                console.log("unhandled event", $event.key, $event.keyCode);
            }
          }
          // fire angular cycle
          $scope.$apply();
        }
      );
  }
}());
