(function(){
'use strict';
angular.module('Spinner', [])
.component('loadingSpinner', {
  template: '<div ng-if="$ctrl.showSpinner"><p>Loading...</p><i class="fa fa-spinner fa-pulse fa-fw fa-4x" alt="loading"></i></div><div ng-hide="$crtl.showSpinner" ng-transclude></div>',
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

angular.module('Error',[])
.component('errorHandling', {
  template: '<div ng-if="$ctrl.show" class="alert alert-danger"><button class="btn close" ng-click="$ctrl.ackAll()"><span aria-hidden>&times;</span></button><h2>{{$ctrl.header}}</h2><ul><li style="list-style:none" ng-repeat="error in $ctrl.errors"><i class="fa fa-ack" ng-click="$ctrl.ack(error)"></i><span>{{error.message}}</span></li></ul></div>',
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

angular.module('Weather', ['Spinner', 'Error'])
   .constant('ApiToken', '05fd081ae4b184e79202e3be8f306d99')
   .controller('WeatherController', WeatherController);

 WeatherController.$inject = ['$http', '$scope', 'ApiToken', '$rootScope' ];
 function WeatherController( $http, $scope, ApiToken, $rootScope ) {
   var weather = this;

   weather.iconClass = "fa fa-thumbs-down";
   weather.changeMetric = function() {
     var oldValue = weather.metric;
      if ( oldValue == "celsius"){
        weather.metric = "fahrenheit";
        weather.temperature = weather.temperature * 1.8 + 32;
      } else {
        weather.metric = "celsius";
        weather.temperature = (weather.temperature - 32) * 5.0/9;
      }
   };
   weather.city = "Test";//WeatherService.data.name;
   weather.metric = "celsius"; //WeatherService.data.metric
   weather.getCityWeather = function() {
     $rootScope.$broadcast('request:processing', {on: true});
     $http({
       url : "http://api.openweathermap.org/data/2.5/weather",
       params: {
         q : weather.citySearch,
         units: "metric",
         appid: ApiToken
       }
     }).then(function(response){
       console.log(response);
       processData(response.data);
       $rootScope.$broadcast('request:processing', {on: false});
     }).catch(function(response) {
       console.log("ERROR", response);
       $rootScope.$broadcast('error:newerror',
        { message : "error retrieving openweathermap by city name" }
       );
     });
   };

   function getWeather(url) {
       $rootScope.$broadcast('request:processing', {on: true});
       $http.post(url).then(
          function(response) {
                processData(response.data);
                $rootScope.$broadcast('request:processing', {on: false});
           },
           function(response) {
             console.log("ERROR", response);
             $rootScope.$broadcast('error:newerror', response );
           });
     };

   function processData(data) {
     if (data.cod != 200) {
         $rootScope.$broadcast('error:newerror', data );
     }
     else {
       weather.latitude = data.coord.lat;
       weather.longitude = data.coord.lon;
       weather.city = data.name;
       weather.temperature = data.main.temp;
       weather.description = data.weather[0].description;
       weather.short = data.weather[0].main;
       weather.iconClass = "mi mi-" + ( weather.short.toLowerCase() == "clear" ? "sun" : weather.short.toLowerCase() );
     }
   };

   weather.mock = function() {
     processData({
          "coord": {
              "lon": 8.49,
              "lat": 49.17
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  //"main" : "Cloud",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "base": "cmc stations",
          "main": {
              "temp": 15.42,
              "pressure": 947,
              "humidity": 85,
              "temp_min": 11.11,
              "temp_max": 22.78
          },
          "wind": {
              "speed": 0.78,
              "deg": 3.50552
          },
          "clouds": {
              "all": 0
          },
          "dt": 1472793947,
          "sys": {
              "type": 3,
              "id": 10489,
              "message": 0.0041,
              "country": "DE",
              "sunrise": 1472791469,
              "sunset": 1472839534
          },
          "id": 3272459,
          "name": "Graben-Neudorf",
          "cod": 200
       });
       weather.done = true;
   };

   if (navigator.geolocation) {
     console.log("geolocation present ...");
     $rootScope.$broadcast('request:processing', {on: true});
     navigator.geolocation.getCurrentPosition(
        function(position) {
             //  console.log("found position ...", position);
              getWeather("http://api.openweathermap.org/data/2.5/weather?lat="+position.coords.latitude+"&lon=" + position.coords.longitude+"&units=metric&appid=05fd081ae4b184e79202e3be8f306d99");
        },
        function (response) {
          console.log("ERROR", response);
          $rootScope.$broadcast('error:newerror', response );
          $scope.$apply();
        },
        {
          timeout:5000,
          enableHighAccuracy: true
        }
     );
    } else {
      console.log("ERROR", response);
      $rootScope.$broadcast('error:newerror',
       { message : "error retrieving openweathermap by city name" }
      );
    }
  };


})()
