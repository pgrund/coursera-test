(function() {
  'use strict';
  angular.module('Simon')
  .constant('SimonConst', {
    TIMEOUT: {
      HIDING: 400,
      NEXT_STEP: 1000,
    },
    MAX_TURNS: 5, //20,
    STATES: {
      init: {
        name:'init',
        description: 'doing init, wait for start ...',
      },
      player: {
        name: 'player',
        description: 'players turn',
      },
      simon: {
        name: 'simon',
        description: 'simons turn',
      },
      won: {
        name: 'won',
        description: 'player won',
      },
      lost: {
        name: 'lost',
        description: 'player lost',
      },
    },
    AUDIOS: [
      'https://s3.amazonaws.com/freecodecamp/simonSound1.mp3',
      'https://s3.amazonaws.com/freecodecamp/simonSound2.mp3',
      'https://s3.amazonaws.com/freecodecamp/simonSound3.mp3',
      'https://s3.amazonaws.com/freecodecamp/simonSound4.mp3',
    ],
    ICONS: {
      success: 'fa-check-square-o',
      warning: 'fa-exclamation-circle',
      danger: 'fa-exclamantion-triangle',
      info: 'fa-info-circle'
    }
  });
}());
