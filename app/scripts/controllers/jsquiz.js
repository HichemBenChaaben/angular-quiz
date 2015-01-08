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

  angular.module('quizApp').controller('JsquizCtrl', jquiz);

  // ng-annotate
  jquiz.$inject = ['$scope', '$http', '$timeout', '$interval', 'jsquestions', '$state'];

  // hoisted function which is tie up to the controller
  function jquiz($scope, $http, $timeout, $interval, jsquestions, $state) {

      // controller varriables
      var vm = this,
          qindex = 0,
          correctAnswer = false;

      vm.sayhello = 'hello man';

      vm.progress = 0;
      vm.restart = true;
      vm.points = 0;
      vm.qtotal = 0;
      vm.qindex = qindex;
      vm.numCorrectAnswers = 0;
      vm.numWrongAnswers = 0;
      // when you click on a button answered became true.
      // it will became false later when the slide change
      vm.answered = false;
      $scope.stats = false;

      // start the controller and get the data
      getQuestions();

      // Function which return a promess
      function getQuestions() {
          // get the data from the json object
          jsquestions.then(function(res) {
              $scope.questions = res.data;
              $scope.slides = $scope.questions[qindex]; // set to the slide by default
              $scope.qtotal = res.data.length;
          });
      }

      // change appearence of progress bar
      vm.displayProgress = function() {
          vm.progress = qindex / vm.qtotal;
      };

      // function to start the quiz app
      $scope.startQuiz = function() {
          getData();
          $scope.restart = true;
      };

      // display the badass message
      $scope.displayCorrect = function(arg) {
          // todo check why i need to reset stats here
          $scope.stats = false;
          // disable the button
          vm.answered = true;
          // the animation happen
          $scope.correctAnswer = true;
          // we add points
          vm.addpoints(arg);
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
      vm.addpoints = function(arg) {
          // convert into int
          vm.points += +arg;
      };

      // display the correct answer to the user
      $scope.correctTheUser = function() {
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
      vm.answer = function(arg, element) {
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
              vm.numCorrectAnswers++;
          } else {
              isCorrect = false;
              vm.numWrongAnswers++;
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

          }
          if ($scope.qindex === $scope.qtotal - 1 && !$scope.stats) {
              // display stats
              console.log(' end of the quiz');
              $scope.stats = true;
          }
      };

      vm.resetQuiz = function() {
          qindex = 0;
          restart = false;
      }
      // close the modal overlay
      vm.closeModal = function() {
          $scope.modalClosed = true;
      };
      vm.restartQuiz = function() {
          $state.go('home');
      };
  }
})();
