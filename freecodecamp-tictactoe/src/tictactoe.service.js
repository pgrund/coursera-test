(function() {
  'use strict';
  angular.module('TicTacToe')
    .service('TicTacToeService', TicTacToeService);

  TicTacToeService.$inject = [];
  function TicTacToeService() {
    var tService = this;

    tService.resetPlayers = function(players) {
      // reset players
      players.forEach( (p,idx) => {
        p.fields = [];
        p.active = (idx == 0);
      });
      return players[0];
    };

    tService.checkForResult = function (player) {
      var success = [
        // rows
        [0,1,2], [3,4,5] , [6,7,8],
        // cols
        [0,3,6], [1,4,7], [2,5,8],
        // dia
        [0,4,8],[2,4,6]
      ];
      // console.log(board, activePlayer.fields);
      return success.find(s =>
         s.every( t => player.fields.indexOf(t)>-1)
       );
    };
  };
}());
