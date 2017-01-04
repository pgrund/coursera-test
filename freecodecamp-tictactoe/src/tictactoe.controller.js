(function() {
  'use strict';
  angular.module('TicTacToe')
    .controller('TicTacToeController', TicTacToeController);

  TicTacToeController.$inject = ['TicTacToeService','$timeout', '$interval'];
  function TicTacToeController(TicTacToeService, $timeout, $interval) {
    var tCtrl = this;

    tCtrl.computer = "novice";
    tCtrl.message = "Set level";
    tCtrl.progress = 0;
    var level = tCtrl.computer;

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
      tCtrl.message = "Select Level";
      tCtrl.progress = 0;
      level = tCtrl.computer;
      tCtrl.start();
    };
    var next = function() {
      if(!tCtrl.running()) {
        tCtrl.state = 'draw';
        tCtrl.message = "It's a draw";
        checkProgress();
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
      if(tCtrl.activePlayer.id == 'X' && level != 'multi') {
        tCtrl.select(getNextMove());
      };
    };

    function getNextMove() {
      if (level == 'novice') {
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
        tCtrl.message="ERROR: not yet implemented";
        throw new Error ('not yet implemented');
      }
    }

    tCtrl.select = function(idx) {
      if(!tCtrl.board[idx].marked) {
        tCtrl.state = 'running';
        tCtrl.message ='';
        tCtrl.activePlayer.fields.push(idx);
        tCtrl.board[idx] = { marked: true, player: tCtrl.activePlayer.id };
        var success = TicTacToeService.checkForResult(tCtrl.activePlayer);
        if (success) {
          tCtrl.state = ( tCtrl.activePlayer.id == 'X' ? 'won' : 'lost');
          tCtrl.message = `${tCtrl.activePlayer.name} won`;
          tCtrl.board.forEach( e => e.marked = true);
          success.forEach( e => tCtrl.board[e].success = true);
          checkProgress();
        } else {
          next();
        };
      } else {
        console.log('invalid, already marked or game over ...');
      };
    };

    function checkProgress() {
      var stopProgress = $interval(function() {
        tCtrl.progress++;
      }, 500)
      $timeout(function() {
        $interval.cancel(stopProgress);
        tCtrl.reset();
      }, 5000);
    };
    tCtrl.running = function() {
      var noFieldsLeft = tCtrl.board.every(e => e.marked);
      var allFieldsEmpty = tCtrl.board.every(e => !e.marked);
      tCtrl.state = noFieldsLeft ? 'draw' : allFieldsEmpty ? 'initial' : 'running';
      return !( noFieldsLeft || allFieldsEmpty );
    };
    tCtrl.start = function() {
      tCtrl.state = 'running';
      tCtrl.message = '';
      tCtrl.updateComputer();
      computerMove();
    };
    tCtrl.result = function() {
      console.log(tCtrl.computer);
      switch (tCtrl.state) {
        case 'won':
        case 'lost':
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
      if(tCtrl.computer == 'multi') {
        tCtrl.players[0].name="Player 1";
        tCtrl.players[1].name="Player 2";
      } else  {
        tCtrl.players[0].name="Computer";
        tCtrl.players[1].name="Player";
      }
      // console.log('starting');
      // tCtrl.reset();
      // tCtrl.start();
    }
  }
}());
