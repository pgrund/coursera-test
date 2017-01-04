(function() {
  'use strict';
  angular.module('TicTacToe')
    .controller('TicTacToeController', TicTacToeController);

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
      // dumb, dumb computer move
      if(tCtrl.activePlayer.id == 'X' && tCtrl.computer > -1) {
        // computers turn
        var nextIdx = -1;
        while(nextIdx < 0) {
          var t = Math.floor(Math.random() * tCtrl.board.length);
          if(!tCtrl.board[t].marked) {
            nextIdx = t;
          }
        }
        tCtrl.select(nextIdx);
      }
    };

    tCtrl.select = function(idx) {
      if(!tCtrl.board[idx].marked) {
        tCtrl.state = 'running';
        tCtrl.activePlayer.fields.push(idx);
        tCtrl.board[idx] = { marked: true, player: tCtrl.activePlayer.id };
        var success = TicTacToeService.checkForResult(tCtrl.activePlayer);
        if (success) {
          tCtrl.state = `${tCtrl.activePlayer.name} wins`;
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
    }
    tCtrl.updateComputer = function() {
      if(tCtrl.computer < 0) {
        tCtrl.players[0].name="Player 1";
        tCtrl.players[1].name="Player 2";
      } else  {
        tCtrl.players[0].name="Computer";
        tCtrl.players[1].name="Player";
      }
    }
  }
}());
