(function() {
  'use strict';
  angular.module('WikiViewer')
  .controller('WikiSearchController', WikiSearchController);

  //WikiSearchController.$inject = [];
  function WikiSearchController() {
    var wiki = this;

    wiki.page = "";
    wiki.search = function () {
      console.log("da", wiki.page);
    };
  }
}());
