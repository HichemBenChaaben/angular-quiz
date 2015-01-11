(function() {
  'use strict';

  /**
   * @ngdoc overview
   * @name quizApp
   * @description
   * quizApp
   *
   * Main module of the application.
   */

  angular
      .module('quizApp', [
          'ngAnimate',
          'ui.router',
          'ui.bootstrap',
          'hljs'
      ])
      .config(function($stateProvider, $urlRouterProvider, hljsServiceProvider) {
        // headghlightjs configuration
        // replace tab with 4 spaces
        hljsServiceProvider.setOptions({
            tabReplace: '  ',
            languages: 'javascript'
        });
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise('/');
        //
        // Now set up the states
        $stateProvider.
        state('home', {
            url: '/',
            controller: 'MainCtrl',
            templateUrl: 'views/main.html'
        }).
        state('jsQuiz', {
          url: '/',
          controller: 'JsquizCtrl',
          controllerAs: 'quiz',
          templateUrl: 'views/javascript/l1.html'
        })
        .state('quiz', {
          url: '/quiz',
          controller: 'QuizCtrl',
          controllerAs: 'qz',
          templateUrl: 'views/quiz.html'
        })
        .state('forms', {
          url: '/forms',
          controller: 'FormsCtrl',
          controllerAs: 'fm',
          templateUrl: 'views/forms.html'
        });
      });

})();
