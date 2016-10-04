(function() {
  'use strict';
  angular.module('WikiViewer')
    .component('pagesList', {
      templateUrl: 'src/templates/pages-list.template.html',
      bindings: {
        items: '<'
      }
    });
}());
