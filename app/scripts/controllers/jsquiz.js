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
        .controller('JsquizCtrl',
            ['$scope', '$http', '$timeout', '$interval', 'jsquestions', getData]);

    // hoisted function which is tie up to the controller
    function getData($scope, $http, $timeout, $interval, jsquestions) {

        // Scope vars
        var self = this,
            qindex = 0,
            correctAnswer = false;

        $scope.progress = 0;
        $scope.restart = false;
        $scope.points = 0;
        $scope.qtotal = 0;
        $scope.qindex = qindex;

        // when you click on a button answered became true.
        // it will became false later when the slide change
        $scope.answered = false;

        $scope.displayProgress = function() {
            $scope.progress = qindex / $scope.qtotal;
        };

        // function to start the quiz app
        $scope.startQuiz = function () {
            getData();
            $scope.restart = 1;
        };

        // Function which return a promess
        function getData() {
            // get the data from the json object
            jsquestions.then(function(res) {
                $scope.questions = res.data;
                $scope.slides = $scope.questions[qindex]; // set to the slide by default
                $scope.qtotal = $scope.questions.length;
            });
        }

        // display the badass message
        $scope.displayCorrect = function(arg) {
            // the animation happen
            $scope.correctAnswer = true;
            // we add points
            $scope.addpoints(arg);
            // display progress
            $scope.displayProgress;
            // disable the button
            $scope.answered = true;
            // we move to the next slide after 2 seconds
            $timeout(function() {
                $scope.correctAnswer = false;
                $scope.progress++;
                $scope.answered = false;
            }, 2000);
        };

        // add points to the user
        $scope.addpoints = function (arg) {
            // convert into int
            var arg = +arg;
            $scope.points += arg;
        };

        // display the correct answer to the user
        $scope.correctTheUser = function() {

        };
        // Handle is an answer is correct or wrong
        $scope.answer = function(arg, element) {
            if ($scope.answered) {
                return;
            }
            if (arg === +$scope.questions[qindex].slide.answer) {
                $scope.displayCorrect($scope.questions[qindex].slide.points);
                $scope.usermessage = 'Correct';
            } else {
                $scope.usermessage = 'Wrong'; // for test issues
                $scope.correctTheUser();
            }

            // check if not excelling the ttal
            if (qindex < $scope.qtotal - 1) {
                $timeout(function() {
                    qindex++;
                    $scope.qindex = qindex;
                    $scope.slides = $scope.questions[qindex];
                    hljs.initHighlightingOnLoad();
                }, 5000);

            } else {
                // you finished the quiz questions
                $scope.restart = true;
                console.log('Move on to the next quiz');
                // go to the stat state of the application
            }
        };
        $scope.resetQuiz = function() {
            qindex = 0;
            restart = false;
        }
    }
})();
