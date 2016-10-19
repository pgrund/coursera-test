(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getCheckMenuItem = function (shortName) {
    return service.getMenuItems().then(function(response) {
      var result = response.menu_items.find((menuItem) => menuItem.short_name == shortName);
      if(result != undefined) service.user.favorite = result;
      return result;
    })
  };

  service.user =  {
  //   firstName: "first",
  //   lastName: "last",
  //   email: "email@address",
  //   phoneNumber: "123-456-7890",
  //   favorite: {
  //     "id":1,
  //     "short_name":"A1",
  //     "name":"Won Ton Soup with Chicken",
  //     "description":"chicken-stuffed won tons in clear chicken broth with white meat chicken pieces and a few scallions",
  //     "price_small":2.55,
  //     "price_large":5.0,
  //     "small_portion_name":"pint",
  //     "large_portion_name":"quart",
  //     "image_present":true
  //   }
    };
  service.registered = (service.user != null && service.user != undefined);
}



})();
