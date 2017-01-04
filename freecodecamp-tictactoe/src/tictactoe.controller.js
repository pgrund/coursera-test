(function() {
  'use strict';
  angular.module('TicTacToe')
    .controller('TicTacToeController', TicTacToeController);

  TicTacToeController.$inject = ['TicTacToeService'];
  function TicTacToeController(TicTacToeService) {
    var tCtrl = this;

    tCtrl.board = [{},{},{},{},{},{},{},{},{}];
    var players = [
      {
        name: 'Player 1',
        id: 'o',
        fa: 'circle-o',
        active: true,
        fields: []
      }, {
        name:'Player 2',
        id: 'x',
        fa: 'remove',
        active: false,
        fields: []
      }];
    tCtrl.activePlayer = players.find(p => p.active);
    tCtrl.result = '';

    tCtrl.reset = function() {
      tCtrl.activePlayer = TicTacToeService.resetPlayers(players);
      tCtrl.board = [{},{},{},{},{},{},{},{},{}];
      tCtrl.result = '';
    };
    var next = function() {
      if(!tCtrl.running()) {
        tCtrl.result = 'Tied';
        return;
      };
      var turn = players.indexOf(tCtrl.activePlayer);
      turn = (turn +1) % players.length;
      players.forEach( (p, idx) => {
        p.active = (idx == turn);}
      );
      tCtrl.activePlayer = players.find(p => p.active);
    };
    tCtrl.select = function(idx) {
      if(!tCtrl.board[idx].marked) {
        tCtrl.activePlayer.fields.push(idx);
        tCtrl.board[idx] = { marked: true, player: tCtrl.activePlayer.id };

        if (TicTacToeService.checkForResult(tCtrl.activePlayer)) {
          tCtrl.result = `${tCtrl.activePlayer.name} wins`;
          tCtrl.board.forEach( e => e.marked =true);
        } else {
          next();
        };
      } else {
        console.log('invalid, already marked or game over ...');
      };
    };
    tCtrl.running = function() {
      return tCtrl.board.some(e => !e.marked);
    };
  }
}());
