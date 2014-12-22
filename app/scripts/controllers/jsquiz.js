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
            ['$scope', '$http', '$timeout', '$interval', 'jsquestions', '$state', getData]);

    // hoisted function which is tie up to the controller
    function getData($scope, $http, $timeout, $interval, jsquestions, $state) {




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
        $scope.stats = false;

        // change appearence of progress bar
        $scope.displayProgress = function() {
            $scope.progress = qindex / $scope.qtotal;
        };

        // function to start the quiz app
        $scope.startQuiz = function () {
            getData();
            $scope.restart = true;
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
            // todo check why i need to reset stats here
            $scope.stats = false;
            // disable the button
            $scope.answered = true;
            // the animation happen
            $scope.correctAnswer = true;
            // we add points
            $scope.addpoints(arg);
            // display progress
            $scope.displayProgress;

            $scope.progress++;
            // we move to the next slide after 2 seconds
            $timeout(function() {
                $scope.correctAnswer = false;
                $scope.answered = false;
            }, 2000);
        };

        // add points to the user
        $scope.addpoints = function (arg) {
            // convert into int
            $scope.points += +arg;
        };

        // display the correct answer to the user
        $scope.correctTheUser = function() {
            // for test issues
            $scope.usermessage = 'Wrong';
            // show parts in the view which have the answer
            $scope.correctA = true;
            // add class to an element
            $scope.wrongA = true;
        };

        // Move to the next slide
        $scope.nextSlide = function() {
            qindex++;
            $scope.qindex = qindex;
            // refresh slides on the scope
            $scope.slides = $scope.questions[qindex];
            // hightlight the code displayed
            hljs.initHighlightingOnLoad();
            // we reset the buttons for answers
            $scope.answered = false;
            // we show the quesions
            $scope.wrongA = false;
        };

        // Handle is an answer is correct or wrong
        $scope.answer = function(arg, element) {
            // user answered correctly!
            var isCorrect = false;

            if ($scope.answered) {
                return;
            }
            // prevent from clicking multiple times on the answer
            $scope.answered = true;

            // if the answer is true
            if (arg === +$scope.questions[qindex].slide.answer) {
                // add points to user
                $scope.displayCorrect($scope.questions[qindex].slide.points);
                isCorrect = true;
            } else {
                isCorrect = false;
                $scope.correctTheUser();
            }

            // check if not excelling the ttal
            if (($scope.qindex < $scope.qtotal - 1) && isCorrect && !$scope.stats) {
                $timeout(function() {
                    // move to the next question
                    qindex++;
                    $scope.qindex = qindex;
                    // refresh slides on the scope
                    $scope.slides = $scope.questions[qindex];
                    // hightlight the code displayed
                    hljs.initHighlightingOnLoad();
                    $scope.answered = false;
                }, 2000);

            } if ($scope.qindex === $scope.qtotal - 1 && !$scope.stats) {
                // display stats
                console.log(' end of the quiz');
                $scope.stats = true;
            }
        };

        $scope.resetQuiz = function() {
            qindex = 0;
            restart = false;
        }
    }
})();
