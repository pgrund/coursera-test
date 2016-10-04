(function() {
  'use strict';
  angular.module('WikiViewer')
    .service('WikipediaService', WikipediaService)
    .constant('dummyData',{
    "batchcomplete": "",
    "continue": {
        "gsroffset": 10,
        "continue": "gsroffset||"
    },
    "query": {
        "pages": {
            "16383": {
                "pageid": 16383,
                "ns": 0,
                "title": "FIFA World Cup Trophy",
                "index": 5,
                "thumbnail": {
                    "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/FIFA_World_Cup_1962_teams.jpg/34px-FIFA_World_Cup_1962_teams.jpg",
                    "width": 34,
                    "height": 50
                },
                "pageimage": "FIFA_World_Cup_1962_teams.jpg",
                "extract": "The World Cup is a gold trophy that is awarded to the winners of the FIFA World Cup association football tournament."
            },
            "204355": {
                "pageid": 204355,
                "ns": 0,
                "title": "Jules Hardouin-Mansart",
                "index": 9,
                "thumbnail": {
                    "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Jules_Hardouin_Mansart_by_Lemoyne.jpg/42px-Jules_Hardouin_Mansart_by_Lemoyne.jpg",
                    "width": 42,
                    "height": 50
                },
                "pageimage": "Jules_Hardouin_Mansart_by_Lemoyne.jpg",
                "extract": "Jules Hardouin-Mansart (16 April 1646 – 11 May 1708) was a French architect whose work is generally considered to be the apex of French Baroque architecture, representing the power and grandeur of Louis XIV. Hardouin-Mansart was one of the most important European architects of the seventeenth century."
            },
            "330391": {
                "pageid": 330391,
                "ns": 0,
                "title": "Jules de Polignac",
                "index": 10,
                "thumbnail": {
                    "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Jules_Armand_de_Polignac_1780%E2%80%931847.JPG/40px-Jules_Armand_de_Polignac_1780%E2%80%931847.JPG",
                    "width": 40,
                    "height": 50
                },
                "pageimage": "Jules_Armand_de_Polignac_1780–1847.JPG",
                "extract": "Prince Jules de Polignac, 3rd Duke of Polignac (Auguste Jules Armand Marie; French pronunciation: ​[ʒyl.də.pɔ.li.ɲak] ; 14 May 1780 – 2 March 1847), was a French statesman."
            },
            "355236": {
                "pageid": 355236,
                "ns": 0,
                "title": "Jules Massenet",
                "index": 4,
                "thumbnail": {
                    "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Jules_Massenet_by_Eug%C3%A8ne_Pirou.jpg/34px-Jules_Massenet_by_Eug%C3%A8ne_Pirou.jpg",
                    "width": 34,
                    "height": 50
                },
                "pageimage": "Jules_Massenet_by_Eugène_Pirou.jpg",
                "extract": "Jules Émile Frédéric Massenet (French: [ʒyl emil fʁedeʁik masnɛ]; 12 May 1842 – 13 August 1912) was a French composer of the Romantic era best known for his operas, of which he wrote more than thirty."
            },
            "9146283": {
                "pageid": 9146283,
                "ns": 0,
                "title": "Jules",
                "index": 2,
                "thumbnail": {
                    "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/F%C3%A9lix_Nadar_1820-1910_portraits_Jules_Verne.jpg/36px-F%C3%A9lix_Nadar_1820-1910_portraits_Jules_Verne.jpg",
                    "width": 36,
                    "height": 50
                },
                "pageimage": "Félix_Nadar_1820-1910_portraits_Jules_Verne.jpg",
                "extract": "Jules is the French form of the Latin \"Julius\" (e.g."
            },
            "18992839": {
                "pageid": 18992839,
                "ns": 0,
                "title": "JULES",
                "index": 1,
                "extract": "JULES (Joint UK Land Environment Simulator) is a land-surface parameterisation model scheme describing soil-vegetation-atmosphere interactions."
            },
            "24089230": {
                "pageid": 24089230,
                "ns": 0,
                "title": "Jules Méline",
                "index": 7,
                "thumbnail": {
                    "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Meline.jpg/41px-Meline.jpg",
                    "width": 41,
                    "height": 50
                },
                "pageimage": "Meline.jpg",
                "extract": "Félix Jules Méline (French pronunciation: ​[ʒyl melin]; 20 May 1838 – 21 December 1925) was a French statesman, prime minister from 1896 to 1898."
            },
            "25202368": {
                "pageid": 25202368,
                "ns": 0,
                "title": "Cascapédia–Saint-Jules",
                "index": 8,
                "thumbnail": {
                    "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Cascap%C3%A9dia%E2%80%93Saint-Jules_Quebec_location_diagram.png/50px-Cascap%C3%A9dia%E2%80%93Saint-Jules_Quebec_location_diagram.png",
                    "width": 50,
                    "height": 40
                },
                "pageimage": "Cascapédia–Saint-Jules_Quebec_location_diagram.png",
                "extract": "Cascapédia–Saint-Jules is a municipality in Quebec, Canada."
            },
            "40027102": {
                "pageid": 40027102,
                "ns": 0,
                "title": "Jules E. Mastbaum Area Vocational Technical School",
                "index": 3,
                "extract": "The Jules E. Mastbaum Area Vocational/Technical School (commonly referred to as the Jules Mastbaum Area Vocational High School) is a public high school in Kensington, Philadelphia, Pennsylvania."
            },
            "45092039": {
                "pageid": 45092039,
                "ns": 0,
                "title": "Lycée Jules Verne",
                "index": 6,
                "extract": "Lycée Jules Verne (LJV) or Lycée français Jules Verne may refer to:"
            }
        }
    },
    "limits": {
        "pageimages": 50,
        "extracts": 20
    }
  })
  .constant('ApiPath', 'https://en.wikipedia.org/w/api.php');
  //https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&
  //gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&
  //pilimit=max&exintro=&explaintext=&exsentences=1&exlimit=max&gsrsearch=Jules

  WikipediaService.$inject = ['$http', 'dummyData', 'ApiPath'];
  function WikipediaService($http, dummyData, ApiPath) {
    var wikiService = this;

    wikiService.searchFor = "Jules";

    wikiService.getPages = function (title) {
      console.log("searching for", title);
      wikiService.searchFor = title;
      return $http.jsonp(ApiPath, {
        url: ApiPath,
        method: 'JSONP',
        params: {
          format: 'json',
          action: 'query',
          generator: 'search',
          gsrnamespace: 0,
          gsrlimit: 10,
          prop: 'pageimages|extracts',
          pilimit: 'max',
          exintro: '',
          explaintext: '',
          exsentences: 1,
          exlimit: 'max',
          gsrsearch: title,
          callback: 'JSON_CALLBACK'
        }
      }).then(function(response) {
        console.log("success", response);
        return response.data;
      }).catch(function(error){
        console.log("ERROR!!", error);
      });
      // console.log(dummyData.query.pages);
      // return dummyData;
    }
  }

  }());
