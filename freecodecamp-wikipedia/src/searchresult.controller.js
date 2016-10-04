(function() {
  'use strict';
  angular.module('WikiViewer')
   .controller('SearchResultController', SearchResultController);

  SearchResultController.$inject = ['pages', '$stateParams'];
  function SearchResultController(pages, $stateParams) {
    var $ctrl = this;
    $ctrl.items = pages.query.pages;
    $ctrl.searchFor = $stateParams.page;

    console.log("SearchResultController", $ctrl.items, $ctrl.searchFor);
  }
}());
