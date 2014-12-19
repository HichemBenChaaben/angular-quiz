'use strict';

/**
 * @ngdoc function
 * @name quizApp.controller:DirCtrl
 * @description
 * # DirCtrl
 * Controller of the quizApp
 */
angular.module('quizApp')
  .controller('DirCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
