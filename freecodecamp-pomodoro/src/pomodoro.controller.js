(function() {
  'use strict';
  angular.module("Pomodoro")
    .controller('PomodoroController', PomodoroController);

  PomodoroController.$inject = ['$interval','$timeout', 'PomodoroTimerStep'];
  function PomodoroController($interval, $timeout,PomodoroTimerStep) {
    var pomCtrl = this;

    pomCtrl.sessionLength =  25;
    pomCtrl.breakLength = 5;
    pomCtrl.running = false;
    pomCtrl.mode = "Session";
    pomCtrl.perc = 0;

    pomCtrl.current = pomCtrl.sessionLength * 60;

    var promises = {
      timeout : undefined,
      interval: undefined
    };

    var set = function(mode, val) {
      if(!pomCtrl.running) {
        pomCtrl.mode = mode;
        if(val){
          var temp = pomCtrl[mode.toLowerCase()+'Length'] + val;//Math.floor()
          if(temp <= 0) {
            console.log("invalid setting", temp);
          } else {
            pomCtrl[mode.toLowerCase()+'Length']  = temp;
            }
        }
        pomCtrl.perc = 0;
        pomCtrl.current = pomCtrl[mode.toLowerCase()+'Length']  * 60;
      } else {
        console.log("clock ist still running, cannot set " + mode);
      }
    }
    pomCtrl.sessionIncr = function() {
      set("Session", PomodoroTimerStep);
    }
    pomCtrl.sessionDecr = function() {
      set("Session", -1*PomodoroTimerStep);
    }
    pomCtrl.breakIncr = function() {
      set("Break", PomodoroTimerStep);
    }
    pomCtrl.breakDecr = function() {
      set("Break", -1*PomodoroTimerStep);
    }
    pomCtrl.toggleTimer = function() {
      pomCtrl.running = !pomCtrl.running;
      if(pomCtrl.running) {
        //start
        var max = (pomCtrl.mode == "Session" ? pomCtrl.sessionLength : pomCtrl.breakLength) * 60;
        promises.interval = $interval( function() {
          pomCtrl.current--;
          pomCtrl.perc = Math.floor((max - pomCtrl.current) / max * 100);
        }, 1000);
        promises.timeout = $timeout(function() {
          pomCtrl.toggleTimer();
          set(pomCtrl.mode == "Break" ? "Session": "Break");
          if(pomCtrl.mode == "Break"){
            pomCtrl.toggleTimer();
          }
        }, pomCtrl.current * 1000);
      } else {
        // stop
        $interval.cancel(promises.interval);
        $timeout.cancel(promises.timeout);
        promises.interval = promises.timeout = undefined;
      }
    };
  }
}());
