(function () {
'use strict';
  angular.module('WikiViewer')
     .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Redirect to tab 1 if no other URL matches
    $urlRouterProvider.otherwise('/');

    // Set up UI states
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'src/templates/home.template.html'
      })
      .state('searchresult', {
        url: '/result/{page}',
        templateUrl: 'src/templates/searchresult.html',
        controller: 'SearchResultController as search',
        resolve: {
          pages: ['WikipediaService', '$stateParams', function(WikipediaService, $stateParams) {
            console.log("da", $stateParams.page);
            return WikipediaService.getPages($stateParams.page);
          }]
        }
      });

  }
})();
