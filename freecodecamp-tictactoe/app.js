(function() {
  'use strict';
  angular.module('TicTacToe',[])
  .service('TicTacToeService', TicTacToeService)
  .controller('TicTacToeController', TicTacToeController);

TicTacToeService.$inject = [];
function TicTacToeService() {
  var tService = this;

  tService.resetPlayers = function(players) {
    // reset players
    players.forEach( (p,idx) => {
      p.fields = [];
      p.active = (p.id == 'X');
    });
    return players.find(p => p.active);
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
TicTacToeController.$inject = ['TicTacToeService'];
function TicTacToeController(TicTacToeService) {
  var tCtrl = this;

  tCtrl.computer = 0;

  tCtrl.board = [{marked:false},{marked:false},{marked:false},{marked:false},{marked:false},{marked:false},{marked:false},{marked:false},{marked:false}];
  tCtrl.players = [
    {
      name: 'Computer',
      id: 'X',
      active: true,
      fields: []
    }, {
      name:'Player',
      id: 'O',
      active: false,
      fields: []
    }];
  tCtrl.activePlayer = tCtrl.players.find(p => p.active);
  tCtrl.state = 'initial';

  tCtrl.reset = function() {
    tCtrl.activePlayer = TicTacToeService.resetPlayers(tCtrl.players);
    tCtrl.board = [{marked:false},{marked:false},{marked:false},{marked:false},{marked:false},{marked:false},{marked:false},{marked:false},{marked:false}];
    tCtrl.state = 'initial';
    tCtrl.start();
  };
  var next = function() {
    if(!tCtrl.running()) {
      tCtrl.state = 'draw';
      return;
    };
    var turn = (tCtrl.players.indexOf(tCtrl.activePlayer) +1) % tCtrl.players.length;
    tCtrl.players.forEach( (p, idx) => {
      p.active = (idx == turn);}
    );
    tCtrl.activePlayer = tCtrl.players.find(p => p.active);
    computerMove();
  };
  function computerMove() {
    // check computers move
    if(tCtrl.activePlayer.id == 'X') {
      tCtrl.select(getNextMove(tCtrl.computer));
    };
  };

  function getNextMove(level) {
    if (level == 0) {
      // dumb
      var nextIdx = -1;
      while(nextIdx < 0) {
        var t = Math.floor(Math.random() * tCtrl.board.length);
        if(!tCtrl.board[t].marked) {
          nextIdx = t;
        }
      }
      return nextIdx;
    } else {
      throw new Error ('not yet implemented');
    }
  }

  tCtrl.select = function(idx) {
    if(!tCtrl.board[idx].marked) {
      tCtrl.state = 'running';
      tCtrl.activePlayer.fields.push(idx);
      tCtrl.board[idx] = { marked: true, player: tCtrl.activePlayer.id };
      var success = TicTacToeService.checkForResult(tCtrl.activePlayer);
      if (success) {
        tCtrl.state = 'wins';
        tCtrl.board.forEach( e => e.marked = true);
        success.forEach( e => tCtrl.board[e].success = true);
        console.log(tCtrl.board);
      } else {
        next();
      };
    } else {
      console.log('invalid, already marked or game over ...');
    };
  };

  tCtrl.running = function() {
    var noFieldsLeft = tCtrl.board.every(e => e.marked);
    var allFieldsEmpty = tCtrl.board.every(e => !e.marked);
    tCtrl.state = noFieldsLeft ? 'draw' : allFieldsEmpty ? 'initial' : 'running';
    return !( noFieldsLeft || allFieldsEmpty );
  };
  tCtrl.start = function() {
    computerMove();
  };
  tCtrl.result = function() {
    switch (tCtrl.state) {
      case 'wins':
         return tCtrl.activePlayer.name + ' wins';
        break;
      case 'draw':
        return 'It\'s a draw';
        break;
      case 'initial':
        return 'Select level';
        break;
      default:
        return tCtrl.state;
    }
  };
  tCtrl.updateComputer = function() {
    if(tCtrl.computer < 0) {
      tCtrl.players[0].name="Player 1";
      tCtrl.players[1].name="Player 2";
    } else  {
      tCtrl.players[0].name="Computer";
      tCtrl.players[1].name="Player";
    }
  }
};

}());
