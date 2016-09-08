(function(){
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = [ '$scope' ];
  function LunchCheckController( $scope ) {
    $scope.message = "";
    $scope.lunchList = "";
    $scope.cssClass = "plain";
    $scope.checkLunch = function () {
      var lunchItems = $scope.lunchList
        .trim()
        .split(",")
        .filter(function(d) {
          return d != "" && d.trim().length != 0
        });
      if(lunchItems.length <= 0 ) {
        $scope.message = "Please enter data first"
        $scope.cssClass = "red";
      } else if ( lunchItems.length <= 3) {
        $scope.message = "Enjoy!";
        $scope.cssClass = "green";
      } else {
        $scope.message = "Too much!";
        $scope.cssClass = "green";
      }
    }
  }
})()
