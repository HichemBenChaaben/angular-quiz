// IIFE
(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name quizApp.controller:JsquizCtrl
     * @description
     * # JsquizCtrl
     * Controller of the quizApp
     */

    angular.module('quizApp')
        .controller('JsquizCtrl', ['$scope', '$http', '$timeout', 'jsquestions', getData]);

    // hoisted function which is tie up to the controller
    function getData($scope, $http, $timeout, jsquestions) {

        var qtotal = 0, // total number of slides
            self = this,
            qindex = 0,
            correctAnswer = false;


        $scope.restart = false;
        $scope.points = 0;
        $scope.qtotal = qtotal;

        $scope.startQuiz = function () {
            getData();
            $scope.restart = 1;
            console.log("button clicked");
        };

        function getData() {
            // get the data from the json object
            jsquestions.then(function(res) {
                $scope.questions = res.data;
                $scope.slides = $scope.questions[qindex]; // set to the slide by default
                qtotal = $scope.questions.length;
            });
        }

        $scope.displayCorrect = function(arg) {
            $scope.correctAnswer = true;
            $scope.usermessage = 'bravo!!!';
            $scope.addpoints(arg);
            $timeout(function() {
                $scope.correctAnswer = false;
            }, 3000);
        };

        // add points to the user
        $scope.addpoints = function (arg) {
            // convert into int
            var arg = +arg;
            $scope.points += arg;
        };

        $scope.answer = function(arg, element) {

            if (arg === +$scope.questions[qindex].slide.answer) {
                $scope.displayCorrect($scope.questions[qindex].slide.points);

                $scope.usermessage = 'Correct';
            } else {

                $scope.usermessage = 'Wrong';
            }
            // check if not excelling the ttal
            if (qindex < qtotal - 1) {
                $timeout(function() {
                    qindex++;
                    $scope.slides = $scope.questions[qindex];
                    hljs.initHighlightingOnLoad();
                    $scope.usermessage.message = 'Correct';
                }, 5000);

            } else {
                $scope.restart = true;
                console.log('Move on to the next quiz');
            }
        };
        $scope.resetQuiz = function() {
            qindex = 0;
            restart = false;
        }
    }
})();
