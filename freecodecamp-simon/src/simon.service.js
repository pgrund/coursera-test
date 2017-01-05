(function() {
  'use strict';
  angular.module('Simon')
  .service('SimonService', [ 'SimonConst', '$timeout', '$interval',
    function SimonService(SimonConst, $timeout, $interval){
      var sSvc = this;

      var player = [],
        sequence = [];

      sSvc.state = SimonConst.STATES.init;
      sSvc.step = 0;
      sSvc.strict = false;
      sSvc.messages = [];


      sSvc.reset = function() {
        // sequences (server, player)
        sequence = [];
        player = [];

        sSvc.step = 0;
        sSvc.messages = [];
        sSvc.state = SimonConst.STATES.simon;

        return addStepToSequence();
      };


      sSvc.playSound = function(idx) {
        var audio = new Audio(SimonConst.AUDIOS[idx]);
        audio.play();
        audio.currentTime = 0;
      };

      function addStepToSequence() {
        // sSvc.state = SimonConst.STATES.init;
        // add next step to sequence
        sequence.push(Math.floor(Math.random() * 4));
        // update var
        sSvc.step = sequence.length;

        return SimonConst.STATES.simon;
        // playSequence();
      };

      sSvc.getStep = function(idx) {
        return sequence[idx];
      };

      sSvc.playersChoice = function(idx) {
        sSvc.playSound(idx);
        player.push(idx);
        // correct amount auf steps entered
        if(player.length == sequence.length) {
          if(angular.equals(sequence, player)) {
            // correct players choice

            player = [];
            if(sequence.length == SimonConst.MAX_TURNS) {
              return sSvc.state = SimonConst.STATES.won;
            } else {
              // success, add new step
              return addStepToSequence();
            }

          } else {
            // wrong players choice
            player = [];
            return SimonConst.STATES.lost;
          };
        };
        return SimonConst.STATES.player;
      }
    }
  ]);
}());
