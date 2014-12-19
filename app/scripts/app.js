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
        'ui.bootstrap'
    ])
    .config(function($stateProvider, $urlRouterProvider) {
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/jsquiz");
        //
        // Now set up the states
        $stateProvider.
        state('home', {
            url: "/",
            templateUrl: "views/main.html"
        })
            .state('quiz', {
                url: 'quizz',
                templateUrl: 'views/quiz-list.html'
            })
            .state('quiz-javascript', {
                url: "jsquiz",
                templateUrl: "views/javascript/l1.html",
                controller: "JsquizCtrl"
            })
            .state('directive-practice', {
                url: 'dir',
                templateUrl: 'views/directive-practice.html',
                controller: 'DirCtrl'
            });

    });
