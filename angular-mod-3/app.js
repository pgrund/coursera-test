(function () {
'use strict';

angular.module('NarrowItDownApp', [])
   .controller('NarrowItDownController', NarrowItDownController)
   .service('MenuSearchService', MenuSearchService)
   .directive('foundItems', FoundItemsDirective);


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController (MenuSearchService) {
    var narrow = this;

    narrow.search = "";
    narrow.found = [];

    narrow.filter = function() {
      MenuSearchService.getMatchedMenuItems(narrow.search)
        .then(function(response){
          narrow.found = response;
        });
    };
    narrow.remove = function(index) {
      narrow.found.splice(index, 1);
    };
}

MenuSearchService.$inject = ['$http'];
function MenuSearchService( $http ) {
  var searchService = this;

  searchService.getMatchedMenuItems = function (searchTerm) {
    return $http({
        url : "https://davids-restaurant.herokuapp.com/menu_items.json"
      }).then(function(response) {
        return response.data.menu_items.filter(function(item) {
          return item.description.indexOf(searchTerm) >= 0;
        });
      });
  };
}

function FoundItemsDirective() {
  var ddo = {
    restrict: 'E',
    templateUrl: "foundItems.html",
    scope: {
       foundItems: "<",
       onRemove: "&"
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'list',
    bindToController: true,
  };
  return ddo;
}

function FoundItemsDirectiveController() {
}
})();
