(function() {
  'use strict';
  angular.module('Simon')
  .controller('SimonController', ['SimonService', 'SimonConst', '$interval', '$timeout',
    function SimonController(SimonService, SimonConst, $interval, $timeout) {
      var sCtrl = this;

      var lastMsg = '';
      var sequence = [];
      var player = [];

      sCtrl.visibleStep = -1;
      sCtrl.error = '';
      sCtrl.step = SimonService.step;
      sCtrl.state = SimonService.state;

      sCtrl.restart = function() {
        // visible step
        sCtrl.visibleStep = -1;
        SimonService.reset();
        sCtrl.state = SimonService.state = SimonConst.STATES.init;
        sCtrl.error = '';
        SimonService.strict = sCtrl.strict;
        playSequence();
      };
      sCtrl.changeable = function () {
        return [SimonConst.STATES.init, SimonConst.STATES.won, SimonConst.STATES.lost].indexOf(sCtrl.state)>-1;
      };

      var message = function (level) {
        return function(msg) {
          sCtrl.error = { name: level, description: msg, fa: SimonConst.ICONS[level] };
        };
      };
      var danger = message('danger');
      var success = message('success');
      var warning = message('warning');
      var info = message('info');

      sCtrl.select = function(idx) {
        if(sCtrl.state != SimonConst.STATES.player) {
          // sCtrl.error = { name: 'warning', description: 'It\'s not your turn ...'};
          console.log('It\'s not your turn ...');
          return;
        }
        var s = SimonService.playersChoice(idx);
        switch (s) {
          case SimonConst.STATES.simon:
            // console.log('simon',SimonService.state);
            sCtrl.state = SimonService.state = s;
            playSequence();
            break;
          case SimonConst.STATES.won:
            success('Congratulation, you won');
            // console.log('won',SimonService.state);
            SimonService.state = sCtrl.state = s;
            break;
          case SimonConst.STATES.lost:
            if(!SimonService.strict) {
              warning('You made a mistake, Simon will replay (since you \'re in non-strict mode)');
              // console.log('lost(strict)',SimonService.state);
              SimonService.state = sCtrl.state = SimonConst.STATES.simon;
              playSequence();
            } else {
              dangesr('You lost! (strict mode)');
              console.log('lost', SimonService.state);
              SimonService.state = sCtrl.state = s;
            };
            break;
          case SimonConst.STATES.player:
             // noop, continue entering players choice
            // console.log('player',SimonService.state);
            sCtrl.state = SimonService.state = s;
            break;
          default:
            console.log('unknown state', s, sCtrl.state);
        }
      };

      function message(msg) {
        sCtrl.message = msg;
      }

      var playSequence = function() {
          sCtrl.step = SimonService.step;
          var idx = 0;
          // every 2sec = 2000ms show next step in sequence
          return $interval(function() {
            sCtrl.visibleStep = SimonService.getStep(idx++);
            SimonService.playSound(sCtrl.visibleStep);

            $timeout(function() {
                // after 500ms, hide current step again
                sCtrl.visibleStep = -1;

                if(idx == SimonService.step ) {
                  // if last item of sequence has been displayed, switch state
                  sCtrl.state = SimonConst.STATES.player;
                  sCtrl.error = '';
                };
              }, SimonConst.TIMEOUT.HIDING);
          }, SimonConst.TIMEOUT.NEXT_STEP, SimonService.step);
      };
    }
]);
}());
