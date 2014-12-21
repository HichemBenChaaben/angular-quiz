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

        var qtotal = 0, // total number of slides
            self = this,
            qindex = 0,
            correctAnswer = false;

        $scope.progress = 0;
        $scope.restart = false;
        $scope.points = 0;
        $scope.qtotal = qtotal;
        $scope.counter = 5;
        // pause the counter
        $scope.isPaused = false;

        // pause the counter
        $scope.startCounter = function() {
            $scope.isPaused = false;
        };
        // start the counter
        $scope.pauseCounter = function() {
            $scope.isPaused = true;
        };
        // function to set the time to answer to a question
        var countDown = $interval(function() {
            if($scope.counter>0) {
                // is paused means we need to pause the app for a while
                if (!$scope.isPaused) {
                    $scope.counter--;
                }
            } else {
                $scope.counter = 5;
            }
        },1000);

        countDown;

        // when you click on a button answered became true.
        // it will became false later when the slide change
        $scope.answered = false;

        $scope.displayProgress = function() {
            $scope.progress = qindex /$scope.qtotal;
        };

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
                $scope.qtotal = qtotal;
            });
        }

        // display the badass message
        $scope.displayCorrect = function(arg) {
            $scope.correctAnswer = true;
            $scope.usermessage = 'bravo!!!';
            $scope.addpoints(arg);
            $scope.displayProgress;
            // disable the button
            $scope.answered = true;
            $timeout(function() {
                $scope.correctAnswer = false;
                $scope.answered = false;
                $scope.progress++;
            }, 3000);
        };

        // add points to the user
        $scope.addpoints = function (arg) {
            // convert into int
            var arg = +arg;
            $scope.points += arg;
        };

        // Handle is an answer is correct or wrong
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
                // you finished the quiz questions
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
