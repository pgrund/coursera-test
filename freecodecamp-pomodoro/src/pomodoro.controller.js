(function() {
  'use strict';
  angular.module("Pomodoro")
    .controller('PomodoroController', PomodoroController);

  PomodoroController.$inject = ['$interval','$timeout'];
  function PomodoroController($interval, $timeout) {
    var pomCtrl = this;

    pomCtrl.sessionLength = .2; // 25;
    pomCtrl.breakLength = .1; //5;
    pomCtrl.running = false;
    pomCtrl.mode = "Session";

    pomCtrl.current = pomCtrl.sessionLength * 60;

    var promises = {
      timeout : undefined,
      interval: undefined
    };
    pomCtrl.setSession = function(val) {
      if(!pomCtrl.running) {
        pomCtrl.mode = "Session";
        if(val){
          var temp = pomCtrl.sessionLength + val;//Math.floor()
          if(temp <= 0) {
            console.log("invalid setting", temp);
          } else {
            pomCtrl.sessionLength = temp;
          }
        }
        pomCtrl.current = pomCtrl.sessionLength * 60;
      } else {
        console.log("clock ist still running, cannot set session");
      }
    }
    pomCtrl.setBreak = function(val) {
      if(!pomCtrl.running) {
        pomCtrl.mode = "Break";
        if(val) {
          var temp = pomCtrl.sessionLength + val;//Math.floor()
          if(temp <= 0) {
            console.log("invalid setting", temp);
          } else {
            pomCtrl.breakLength = temp;
          }
        }
        pomCtrl.current = pomCtrl.breakLength * 60;
      } else {
        console.log("clock ist still running, cannot set session");
      }
    }
    pomCtrl.toggleTimer = function() {
      pomCtrl.running = !pomCtrl.running;
      if(pomCtrl.running) {
        //start
        promises.interval = $interval( function() {
          pomCtrl.current--;
          pomCtrl.perc = Math.floor(((pomCtrl.mode == "Session" ? pomCtrl.sessionLength : pomCtrl.breakLength) * 60 - pomCtrl.current) / (pomCtrl.mode == "Session" ? pomCtrl.sessionLength * 60: pomCtrl.breakLength * 60));
        }, 1000);
        promises.timeout = $timeout(function() {
          pomCtrl.toggleTimer();
          if(pomCtrl.mode == "Break"){
            pomCtrl.setSession();
          } else {
            pomCtrl.setBreak();
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
