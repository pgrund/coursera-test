(function () {
    'use strict';
    angular.module('data')
       .service('MenuDataService', MenuDataService)
       .constant('BasePath', '//davids-restaurant.herokuapp.com');

    MenuDataService.$inject = ['$http', 'BasePath'];
    function MenuDataService($http, BasePath) {
        var menuDataService = this;
        menuDataService.getAllCategories = function() {
            return $http({
                url : (BasePath + "/categories.json")
            }).then(function (response) {
              return response.data;
            });
        };
        menuDataService.getItemsForCategory = function(categoryShortName) {
            return $http({
                url : (BasePath + "/menu_items.json"),
                params: {
                    category: categoryShortName
                }
            }).then(function(response) {
              return response.data;
            });
        };
    }
})();
