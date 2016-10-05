(function() {
  'use strict';
  angular.module('TwitchTV')
    .controller('ChannelListController', ChannelListController);

  ChannelListController.$inject = ['TwitchTVService'];
  function ChannelListController(TwitchTVService) {
    var listCtrl = this;

    listCtrl.items = TwitchTVService.channels;
    listCtrl.apiToken = "";
    listCtrl.useMock = true;

    listCtrl.search = function (channel) {
      console.log("searching for ", channel);
    }
    listCtrl.setFilter = function (value) {
      if(value === undefined) {
        listCtrl.items = TwitchTVService.channels
      } else if (value) {
        listCtrl.items = TwitchTVService.channels.filter( function (channel) {
          return channel.status == "online";
        });
      } else {
        listCtrl.items = TwitchTVService.channels.filter( function (channel) {
          return channel.status == "offline";
        });
      }
    }
    listCtrl.getTwitchTvChannels = function() {
      listCtrl.useMock = (listCtrl.apiToken.trim().length == 0);

      console.log("getting data from TwitchTV", "mocking data: " + listCtrl.useMock, "Client-ID:" + listCtrl.apiToken);
      TwitchTVService.mock = listCtrl.useMock;
      TwitchTVService.getChannels(listCtrl.apiToken)
        .then(function(response){
           listCtrl.items = TwitchTVService.channels;
        }).catch(function(error) {
          console.log("error in controller", error);
       });
    }
  }
}());
