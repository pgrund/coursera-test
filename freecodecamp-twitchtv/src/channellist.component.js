(function() {
  'use strict';
  angular.module('TwitchTV')
    .component('channelList', {
      templateUrl: 'src/templates/channel-list.template.html',
      bindings: {
        items: '<'
      }
    });
}());
