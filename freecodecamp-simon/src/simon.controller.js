(function() {
  'use strict';
  angular.module('Simon')
  .controller('SimonController', ['$timeout', '$interval', '$scope',
    function SimonController($timeout, $interval, $scope) {
      var sCtrl = this;

      const MAX_TURNS = 20;

      var lastMsg = '';
      var sequence = [];
      var player = [];

      sCtrl.state = 'init';
      sCtrl.strict = false, sCtrl.visibleStep = -1, sCtrl.step = 0;
      sCtrl.messages = [];

      sCtrl.restart = function() {
        console.log('starting ...');
        reset();
        addStep();
      };
      function reset() {
        console.log('reset ...');
        // visible step
        sCtrl.visibleStep = -1;
        // sequences (server, player)
        sequence = [];
        player = [];
      };

      sCtrl.select = function(idx) {
        if(sCtrl.state != 'play') {
          console.log('wrong state !!!');
          return;
        }
        player.push(idx);
        // correct amount auf steps entered
        if(player.length == sequence.length) {
          if(angular.equals(sequence, player)) {
            if(sequence.length == MAX_TURNS) {
              sCtrl.state = 'won';
              message('You won !!!');
            } else {
              // success, add new step
              message('Correct.', true);
              addStep();
            }
          } else {
            // wrong
            if(sCtrl.strict) {
              sCtrl.state = 'lost';
              console.log('restart...');
              message('You lost (strict mode)!! restarting ...', true)
              sCtrl.restart();
            } else {
              // retry
              message('Wrong, replaying ...', true);
              console.log('replay...');
              playSequence();
            };
          };
          player = [];
        };
      };

      function addStep() {
        sCtrl.state = 'init';
        // add next step to sequence
        sequence.push(Math.floor(Math.random() * 4));
        // update var
        sCtrl.step = sequence.length;
        playSequence();
      };

      function message(msg, persist) {
        if(persist) {
          lastMsg = msg;
        } else {
          msg = lastMsg + " " + msg;
          lastMsg = '';
        }
        sCtrl.messages.push({ time: new Date(), message:msg, state: sCtrl.state });
      }

      var playSequence = function() {
          sCtrl.state = 'simon';
          message("Simon says ...");
          var idx = 0;
          // every 2sec = 2000ms show next step in sequence
          return $interval(function() {
            sCtrl.visibleStep = sequence[idx++];
            $timeout(function() {
              // after 500ms, hide current step again
              sCtrl.visibleStep = -1;
              if(idx == sequence.length ) {
                // if last item of sequence has been displayed, switch state
                sCtrl.state = 'play';
                message("Your turn ...");
              };
            }, 500);
          }, 2000, sequence.length);
          console.log('playing done');
      };
    }
]);
}());
