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
    narrow.error = '';

    narrow.filter = function() {
      MenuSearchService.getMatchedMenuItems(narrow.search)
        .then(function(response){
          narrow.found = response;
          narrow.error = '';
        },function(reason) {
          narrow.error = reason;
          narrow.found = [];
        });
    };
    narrow.remove = function(index) {
      narrow.found.splice(index, 1);
    };
}

MenuSearchService.$inject = ['$http', '$q'];
function MenuSearchService( $http, $q ) {
  var searchService = this;

  searchService.getMatchedMenuItems = function (searchTerm) {
    if(searchTerm == "") return $q.reject("empty search term");

    return $http({
        url : "https://davids-restaurant.herokuapp.com/menu_items.json"
      }).then(function(response) {
        var res = response.data.menu_items.filter(function(item) {
          return item.description.indexOf(searchTerm) >= 0;
        });
        if (res.length == 0 ) return $q.reject("no entry found for '" + searchTerm +"'");
        return res;
      }, function(response){
        console.log("error during REST call", response);
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
    transclude: true
  };
  return ddo;
}

function FoundItemsDirectiveController() {
}
})();
