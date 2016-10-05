(function() {
  'use strict';
  angular.module('TwitchTV')
    .service('TwitchTVService', TwitchTVService)
    .constant('dummyData', [
      {
        "stream":{
          "_id":23322292576,
          "game":"StarCraft II",
          "viewers":547,
          "created_at":"2016-10-03T17:22:50Z",
          "video_height":720,
          "average_fps":50,
          "delay":0,
          "is_playlist":false,
          "_links":{
            "self":"https://api.twitch.tv/kraken/streams/esl_sc2"
          },
          "preview":{
            "small":"https://static-cdn.jtvnw.net/previews-ttv/live_user_esl_sc2-80x45.jpg",
            "medium":"https://static-cdn.jtvnw.net/previews-ttv/live_user_esl_sc2-320x180.jpg",
            "large":"https://static-cdn.jtvnw.net/previews-ttv/live_user_esl_sc2-640x360.jpg",
            "template":"https://static-cdn.jtvnw.net/previews-ttv/live_user_esl_sc2-{width}x{height}.jpg"
          },
          "channel":{
            "mature":false,
            "status":"RERUN: StarCraft 2 - Maru vs. Dark (TvZ) - IEM Katowice 2015 - Quarterfinal",
            "broadcaster_language":"en",
            "display_name":"ESL_SC2",
            "game":"StarCraft II",
            "language":"en",
            "_id":30220059,
            "name":"esl_sc2",
            "created_at":"2012-05-02T09:59:20Z",
            "updated_at":"2016-10-05T08:30:12Z",
            "delay":null,
            "logo":"https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-profile_image-d6db9488cec97125-300x300.jpeg",
            "banner":null,
            "video_banner":"https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-channel_offline_image-5a8657f8393c9d85-1920x1080.jpeg",
            "background":null,
            "profile_banner":"https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-profile_banner-f8295b33d1846e75-480.jpeg",
            "profile_banner_background_color":"#050506",
            "partner":true,
            "url":"https://www.twitch.tv/esl_sc2",
            "views":60964492,
            "followers":135425,
            "_links":{
              "self":"http://api.twitch.tv/kraken/channels/esl_sc2",
              "follows":"http://api.twitch.tv/kraken/channels/esl_sc2/follows",
              "commercial":"http://api.twitch.tv/kraken/channels/esl_sc2/commercial",
              "stream_key":"http://api.twitch.tv/kraken/channels/esl_sc2/stream_key",
              "chat":"http://api.twitch.tv/kraken/chat/esl_sc2",
              "subscriptions":"http://api.twitch.tv/kraken/channels/esl_sc2/subscriptions",
              "editors":"http://api.twitch.tv/kraken/channels/esl_sc2/editors",
              "teams":"http://api.twitch.tv/kraken/channels/esl_sc2/teams",
              "videos":"http://api.twitch.tv/kraken/channels/esl_sc2/videos"
            }
          }
        },
        "_links":{
          "self":"https://api.twitch.tv/kraken/streams/ESL_SC2",
          "channel":"https://api.twitch.tv/kraken/channels/ESL_SC2"
        },
        "status":"online"
      },
      {
        "stream":{
          "_id":23330752048,
          "game":"StarCraft II",
          "viewers":240,
          "created_at":"2016-10-04T21:06:17Z",
          "video_height":720,
          "average_fps":60.487804878,
          "delay":0,
          "is_playlist":false,
          "_links":{
            "self":"https://api.twitch.tv/kraken/streams/ogamingsc2"
          },
          "preview":{
            "small":"https://static-cdn.jtvnw.net/previews-ttv/live_user_ogamingsc2-80x45.jpg",
            "medium":"https://static-cdn.jtvnw.net/previews-ttv/live_user_ogamingsc2-320x180.jpg",
            "large":"https://static-cdn.jtvnw.net/previews-ttv/live_user_ogamingsc2-640x360.jpg",
            "template":"https://static-cdn.jtvnw.net/previews-ttv/live_user_ogamingsc2-{width}x{height}.jpg"
          },
          "channel":{
            "mature":false,
            "status":"Topdogs, ro4 & finale",
            "broadcaster_language":"fr",
            "display_name":"OgamingSC2",
            "game":"StarCraft II",
            "language":"en",
            "_id":71852806,
            "name":"ogamingsc2",
            "created_at":"2014-09-24T15:06:58Z",
            "updated_at":"2016-10-05T08:30:35Z",
            "delay":null,
            "logo":"https://static-cdn.jtvnw.net/jtv_user_pictures/ogamingsc2-profile_image-9021dccf9399929e-300x300.jpeg",
            "banner":null,
            "video_banner":"https://static-cdn.jtvnw.net/jtv_user_pictures/ogamingsc2-channel_offline_image-1570cf4930177aa3-1920x1080.jpeg",
            "background":null,
            "profile_banner":"https://static-cdn.jtvnw.net/jtv_user_pictures/ogamingsc2-profile_banner-d418aed2c0ef7d35-480.jpeg",
            "profile_banner_background_color":null,
            "partner":true,
            "url":"https://www.twitch.tv/ogamingsc2",
            "views":20572951,
            "followers":40761,
            "_links":{
              "self":"http://api.twitch.tv/kraken/channels/ogamingsc2",
              "follows":"http://api.twitch.tv/kraken/channels/ogamingsc2/follows",
              "commercial":"http://api.twitch.tv/kraken/channels/ogamingsc2/commercial",
              "stream_key":"http://api.twitch.tv/kraken/channels/ogamingsc2/stream_key",
              "chat":"http://api.twitch.tv/kraken/chat/ogamingsc2",
              "subscriptions":"http://api.twitch.tv/kraken/channels/ogamingsc2/subscriptions",
              "editors":"http://api.twitch.tv/kraken/channels/ogamingsc2/editors",
              "teams":"http://api.twitch.tv/kraken/channels/ogamingsc2/teams",
              "videos":"http://api.twitch.tv/kraken/channels/ogamingsc2/videos"
            }
          }
        },
        "_links":{
          "self":"https://api.twitch.tv/kraken/streams/OgamingSC2",
          "channel":"https://api.twitch.tv/kraken/channels/OgamingSC2"
        },
        "status":"online"
      },
      {
        "stream":{
          "channel":{
            "mature":true,
            "status":"Getting My Grind On",
            "broadcaster_language":"en",
            "display_name":"cretetion",
            "game":"Destiny",
            "language":"en",
            "_id":90401618,
            "name":"cretetion",
            "created_at":"2015-05-06T15:57:39Z",
            "updated_at":"2016-10-05T03:31:04Z",
            "delay":null,
            "logo":"https://static-cdn.jtvnw.net/jtv_user_pictures/cretetion-profile_image-12bae34d9765f222-300x300.jpeg",
            "banner":null,
            "video_banner":"https://static-cdn.jtvnw.net/jtv_user_pictures/cretetion-channel_offline_image-0410bb4dec3a9991-1920x1080.jpeg",
            "background":null,
            "profile_banner":"https://static-cdn.jtvnw.net/jtv_user_pictures/cretetion-profile_banner-c50d8ffd97fc7ffa-480.png",
            "profile_banner_background_color":null,
            "partner":false,
            "url":"https://www.twitch.tv/cretetion",
            "views":11355,
            "followers":897,
            "_links":{
              "self":"https://api.twitch.tv/kraken/channels/cretetion",
              "follows":"https://api.twitch.tv/kraken/channels/cretetion/follows",
              "commercial":"https://api.twitch.tv/kraken/channels/cretetion/commercial",
              "stream_key":"https://api.twitch.tv/kraken/channels/cretetion/stream_key",
              "chat":"https://api.twitch.tv/kraken/chat/cretetion",
              "subscriptions":"https://api.twitch.tv/kraken/channels/cretetion/subscriptions",
              "editors":"https://api.twitch.tv/kraken/channels/cretetion/editors",
              "teams":"https://api.twitch.tv/kraken/channels/cretetion/teams",
              "videos":"https://api.twitch.tv/kraken/channels/cretetion/videos"
            }
          }
        },
        "_links":{
          "self":"https://api.twitch.tv/kraken/streams/cretetion",
          "channel":"https://api.twitch.tv/kraken/channels/cretetion"
        },
        "status":"offline"
      },
      {
        "stream":{
          "channel":{
            "mature":false,
            "status":"Greg working on Electron-Vue boilerplate w/ Akira #programming #vuejs #electron",
            "broadcaster_language":"en",
            "display_name":"FreeCodeCamp",
            "game":"Creative",
            "language":"en",
            "_id":79776140,
            "name":"freecodecamp",
            "created_at":"2015-01-14T03:36:47Z",
            "updated_at":"2016-10-05T08:00:48Z",
            "delay":null,
            "logo":"https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_image-d9514f2df0962329-300x300.png",
            "banner":null,
            "video_banner":"https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-channel_offline_image-b8e133c78cd51cb0-1920x1080.png",
            "background":null,
            "profile_banner":"https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_banner-6f5e3445ff474aec-480.png",
            "profile_banner_background_color":null,
            "partner":false,
            "url":"https://www.twitch.tv/freecodecamp",
            "views":163291,
            "followers":10100,
            "_links":{
              "self":"https://api.twitch.tv/kraken/channels/freecodecamp",
              "follows":"https://api.twitch.tv/kraken/channels/freecodecamp/follows",
              "commercial":"https://api.twitch.tv/kraken/channels/freecodecamp/commercial",
              "stream_key":"https://api.twitch.tv/kraken/channels/freecodecamp/stream_key",
              "chat":"https://api.twitch.tv/kraken/chat/freecodecamp",
              "subscriptions":"https://api.twitch.tv/kraken/channels/freecodecamp/subscriptions",
              "editors":"https://api.twitch.tv/kraken/channels/freecodecamp/editors",
              "teams":"https://api.twitch.tv/kraken/channels/freecodecamp/teams",
              "videos":"https://api.twitch.tv/kraken/channels/freecodecamp/videos"
            }
          }
        },
        "_links":{
          "self":"https://api.twitch.tv/kraken/streams/freecodecamp",
          "channel":"https://api.twitch.tv/kraken/channels/freecodecamp"
        },
        "status":"offline"
      },
      {
        "stream":{
          "channel":{
            "mature":null,
            "status":"Massively Effective",
            "broadcaster_language":null,
            "display_name":"Habathcx",
            "game":null,
            "language":"en",
            "_id":6726509,
            "name":"habathcx",
            "created_at":"2009-06-07T15:04:54Z",
            "updated_at":"2016-10-04T21:30:39Z",
            "delay":null,
            "logo":"https://static-cdn.jtvnw.net/jtv_user_pictures/habathcx-profile_image-d75385dbe4f42a66-300x300.jpeg",
            "banner":null,
            "video_banner":null,
            "background":null,
            "profile_banner":null,
            "profile_banner_background_color":null,
            "partner":false,
            "url":"https://www.twitch.tv/habathcx",
            "views":749,
            "followers":14,
            "_links":{
              "self":"https://api.twitch.tv/kraken/channels/habathcx",
              "follows":"https://api.twitch.tv/kraken/channels/habathcx/follows",
              "commercial":"https://api.twitch.tv/kraken/channels/habathcx/commercial",
              "stream_key":"https://api.twitch.tv/kraken/channels/habathcx/stream_key",
              "chat":"https://api.twitch.tv/kraken/chat/habathcx",
              "subscriptions":"https://api.twitch.tv/kraken/channels/habathcx/subscriptions",
              "editors":"https://api.twitch.tv/kraken/channels/habathcx/editors",
              "teams":"https://api.twitch.tv/kraken/channels/habathcx/teams",
              "videos":"https://api.twitch.tv/kraken/channels/habathcx/videos"
            }
          }
        },
        "_links":{
          "self":"https://api.twitch.tv/kraken/streams/habathcx",
          "channel":"https://api.twitch.tv/kraken/channels/habathcx"
        },
        "status":"offline"
      },
      {
        "stream":{
          "channel":{
            "mature":null,
            "status":null,
            "broadcaster_language":null,
            "display_name":"storbeck",
            "game":null,
            "language": "en",
             "_id": 86238744,
            "name": "storbeck",
            "created_at": "2015-03-25T02:23:40Z",
            "updated_at": "2016-10-04T21:00:24Z",
            "delay": null,
            "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/storbeck-profile_image-7ab13c2f781b601d-300x300.jpeg",
            "banner": null,
            "video_banner": null,
            "background": null,
            "profile_banner": null,
            "profile_banner_background_color": null,
            "partner": false,
            "url": "https://www.twitch.tv/storbeck",
            "views": 1012,
            "followers": 10,
            "_links": {
              "self": "https://api.twitch.tv/kraken/channels/storbeck",
              "follows": "https://api.twitch.tv/kraken/channels/storbeck/follows",
              "commercial": "https://api.twitch.tv/kraken/channels/storbeck/commercial",
              "stream_key": "https://api.twitch.tv/kraken/channels/storbeck/stream_key",
              "chat": "https://api.twitch.tv/kraken/chat/storbeck",
              "subscriptions": "https://api.twitch.tv/kraken/channels/storbeck/subscriptions",
              "editors": "https://api.twitch.tv/kraken/channels/storbeck/editors",
              "teams": "https://api.twitch.tv/kraken/channels/storbeck/teams",
              "videos": "https://api.twitch.tv/kraken/channels/storbeck/videos"
          }
        }
        },
        "_links": {
          "self": "https://api.twitch.tv/kraken/streams/storbeck",
          "channel": "https://api.twitch.tv/kraken/channels/storbeck"
       },
       "status": "offline"
      },
      {
         "stream": {
           "channel": {
              "mature": false,
              "status": "Building a new hackintosh for #programming and gaming and having a few beers! Lets do this! #pcbuilding ",
              "broadcaster_language": "en",
              "display_name": "noobs2ninjas",
              "game": "Creative",
              "language": "en",
              "_id": 82534701,
              "name": "noobs2ninjas",
              "created_at": "2015-02-13T08:13:10Z",
              "updated_at": "2016-10-05T02:31:24Z",
              "delay": null,
              "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/noobs2ninjas-profile_image-34707f847a73d934-300x300.png",
              "banner": null,
              "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/noobs2ninjas-channel_offline_image-7f974925e9dc942c-1920x1080.jpeg",
              "background": null,
              "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/noobs2ninjas-profile_banner-0a065656911e6d4d-480.jpeg",
              "profile_banner_background_color": null,
              "partner": false,
              "url": "https://www.twitch.tv/noobs2ninjas",
              "views": 48077,
              "followers": 836,
              "_links": {
                  "self": "https://api.twitch.tv/kraken/channels/noobs2ninjas",
                  "follows": "https://api.twitch.tv/kraken/channels/noobs2ninjas/follows",
                  "commercial": "https://api.twitch.tv/kraken/channels/noobs2ninjas/commercial",
                  "stream_key": "https://api.twitch.tv/kraken/channels/noobs2ninjas/stream_key",
                  "chat": "https://api.twitch.tv/kraken/chat/noobs2ninjas",
                  "subscriptions": "https://api.twitch.tv/kraken/channels/noobs2ninjas/subscriptions",
                  "editors": "https://api.twitch.tv/kraken/channels/noobs2ninjas/editors",
                  "teams": "https://api.twitch.tv/kraken/channels/noobs2ninjas/teams",
                  "videos": "https://api.twitch.tv/kraken/channels/noobs2ninjas/videos"
              }
          }
        },
        "_links": {
          "self": "https://api.twitch.tv/kraken/streams/noobs2ninjas",
          "channel": "https://api.twitch.tv/kraken/channels/noobs2ninjas"
        },
        "status": "offline"
      },
      {
        "stream": {
          "channel": {
              "mature": false,
              "status": "Code wrangling",
              "broadcaster_language": "en",
              "display_name": "RobotCaleb",
              "game": "Programming",
              "language": "en",
              "_id": 54925078,
              "name": "robotcaleb",
              "created_at": "2014-01-13T04:07:33Z",
              "updated_at": "2016-10-05T05:00:29Z",
              "delay": null,
              "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/robotcaleb-profile_image-9422645f2f0f093c-300x300.png",
              "banner": null,
              "video_banner": null,
              "background": null,
              "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/robotcaleb-profile_banner-7167a1b68fb1c502-480.png",
              "profile_banner_background_color": null,
              "partner": false,
              "url": "https://www.twitch.tv/robotcaleb",
              "views": 4584,
              "followers": 20,
              "_links": {
                  "self": "https://api.twitch.tv/kraken/channels/robotcaleb",
                  "follows": "https://api.twitch.tv/kraken/channels/robotcaleb/follows",
                  "commercial": "https://api.twitch.tv/kraken/channels/robotcaleb/commercial",
                  "stream_key": "https://api.twitch.tv/kraken/channels/robotcaleb/stream_key",
                  "chat": "https://api.twitch.tv/kraken/chat/robotcaleb",
                  "subscriptions": "https://api.twitch.tv/kraken/channels/robotcaleb/subscriptions",
                  "editors": "https://api.twitch.tv/kraken/channels/robotcaleb/editors",
                  "teams": "https://api.twitch.tv/kraken/channels/robotcaleb/teams",
                  "videos": "https://api.twitch.tv/kraken/channels/robotcaleb/videos"
              }
          }
        },
        "_links": {
          "self": "https://api.twitch.tv/kraken/streams/RobotCaleb",
          "channel": "https://api.twitch.tv/kraken/channels/RobotCaleb"
        },
        "status": "offline"
      }
  ])
    .constant('TwitchTVChannels', [ "ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp",
    "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"])
    .constant('TwitchTVApiBase', 'https://api.twitch.tv/kraken');

  TwitchTVService.$inject = ['$http', 'dummyData', '$q',
    'TwitchTVChannels', 'TwitchTVApiBase'];
  function TwitchTVService($http, dummyData, $q, TwitchTVChannels,
    TwitchTVApiBase) {
    var twitchService = this;

    twitchService.mock = true;
    twitchService.channels = [];

    twitchService.getChannels = function(TwitchTVApiToken) {
      var callData = function( passedUrl ) {
        if(!twitchService.mock) {
          return $http({
            url : passedUrl,
            headers: {
              'Client-ID': TwitchTVApiToken
            }
          });
        } else {
          var channel = passedUrl.substr(passedUrl.lastIndexOf("/")+1);
          return $q( function (resolve, reject) {
            var item = dummyData.filter(function(s) {
              return channel.toLowerCase() == s.stream.channel.display_name.toLowerCase();
            })[0];
            resolve({data: item});
          });
        }
      };

      twitchService.channels = [];
      var allCalls = TwitchTVChannels.map(function(channel) {
          return callData(TwitchTVApiBase + "/streams/" + channel )
            .then(function(response) {
              var data = response.data;
              if(data.stream == null) {
                return callData(data._links.channel)
                  .then(function(response) {
                    data.status = "offline";
                    data.stream = {};
                    data.stream.channel = response.data;
                    twitchService.channels.push(data);
                });
              } else {
                data.status = data.status || "online";
                twitchService.channels.push(data);
              }
          });
        });

        return $q.all(allCalls).then(function(results) {
          console.log("all done in service", twitchService.channels);
        }).catch(function(err){
          console.log("ERROR", err);
        });
    };
    twitchService.getChannels();
  }
}());
