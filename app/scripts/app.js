'use strict';

/**
 * @ngdoc overview
 * @name quizApp
 * @description
 * # quizApp
 *
 * Main module of the application.
 */
angular
    .module('quizApp', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ui.router',
        'myDirectives',
        'ui.bootstrap',
        'hljs'
    ])
    .config(function($stateProvider, $urlRouterProvider, hljsServiceProvider) {
        // headghlightjs configuration
        hljsServiceProvider.setOptions({
            // replace tab with 4 spaces
            tabReplace: '  ',
            languages: 'javascript'
          });
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise('home');
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
                templateUrl: 'views/javascript/l1.html'
            });
    });
