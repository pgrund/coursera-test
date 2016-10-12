(function() {
  'use strict';
  angular.module("Pomodoro")
    .controller('PomodoroController', PomodoroController);

  PomodoroController.$inject = ['$interval','$timeout'];
  function PomodoroController($interval, $timeout) {
    var pomCtrl = this;

    pomCtrl.sessionLength = 25;
    pomCtrl.breakLength = 5;
    pomCtrl.running = false;

    pomCtrl.current = pomCtrl.sessionLength * 60;

    var promises = {
      timeout : undefined,
      interval: undefined
    };
    pomCtrl.toggleTimer = function() {
      pomCtrl.running = !pomCtrl.running;
      if(pomCtrl.running) {
        //start
        pomCtrl.current = pomCtrl.sessionLength * 60;
        promises.interval = $interval( function() { pomCtrl.current--; }, 1000);
        promises.timeout = $timeout(pomCtrl.toggleTimer, pomCtrl.current * 1000);
      } else {
        // stop
        $interval.cancel(promises.interval);
        $timeout.cancel(promises.timeout);
        promises.interval = promises.timeout = undefined;
      }
    };
  }
}());
