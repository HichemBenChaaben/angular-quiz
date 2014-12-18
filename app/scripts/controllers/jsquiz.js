// IIFE
(function(window, document, undefined) {
    'use strict';

    /**
     * @ngdoc function
     * @name quizApp.controller:JsquizCtrl
     * @description
     * # JsquizCtrl
     * Controller of the quizApp
     */

    angular.module('quizApp')
        .controller('JsquizCtrl',['$scope', '$http', '$timeout', 'jsquestions', getData]);

    // hoisted function which is tie up to the controller
    function getData ($scope, $http, $timeout, jsquestions) {

            var qindex = 0,
                qtotal;

            // get the questions
            jsquestions.getQuestions();

            $scope.displayCorrect = function() {
                $scope.data.message = true;
            };

            $scope.answer = function(arg) {
                if (arg === +$scope.data.answer) {
                    $scope.displayCorrect();
                    $scope.usermessage = 'Correct';
                } else {
                    $scope.usermessage = 'Wrong';
                }
                // check if not excelling the ttal
                if (qindex < qtotal-1) {
                    $timeout(function() {
                        qindex ++;
                        $scope.data = $scope.questions[qindex].slide;
                        hljs.initHighlightingOnLoad();
                        $scope.usermessage = 'Correct';
                    }, 1000);

                } else {
                    console.log('Move on to the next quiz');
                }
            };
        }

})(window, document);
