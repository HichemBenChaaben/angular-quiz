// IIFEE
(function(){

  'use strict';
  angular.module('quizApp').controller('QuizCtrl', qz);

  // annontate
  qz.$inject = ['$scope', '$timeout', 'jsquestions'];

  function qz($scope, $timeout, jsquestions) {
    // changes reference, vm stands for view-model
    var vm = this;

    // user vars
    vm.goodAnswers = 0;
    vm.qindex = 0;
    vm.initiate = false;
    vm.wrongAnswers = 0;
    vm.qtotal = 0;

    vm.startQuiz = function() {
      // on click trigger starts the quiz and gets the first set
      vm.initiate = true;
      vm.slides = getQuestions();
    };

    function getQuestions() {
      /*
        Description
        This should return data from the service
        @quesions: data contains the questions
        @slides: the slides, a slide have a question, answer, alternatives and correct answer
      */
      return jsquestions.then(function(res) {
          vm.questions = res.data;
          vm.slides = vm.questions[vm.qindex];
          vm.qtotal = res.data.length;
      });
    }

    vm.answer = function(index, arg) {
      var arg = +arg;
      return (index === arg ? vm.displayCorrect() : vm.displayWrong());
    };

    // show points earned
    vm.displayCorrect = function() {
      console.log('correct answer');
      vm.next();
    };

    // display the correct answer to the user
    vm.displayWrong = function() {
      console.log('wrong answer');
      vm.next();
    };

    // move to the next question
    vm.next = function() {
      if (vm.qindex <= vm.qtotal) {
        vm.qindex++;
        console.log('.............');
      } else {
        vm.quizEnd();
      }
    };

    // show previous question
    vm.previous = function() {
      vm.qindex--;
    };

    // display the quiz end and results
    vm.quizEnd = function() {
      vm.initiate = false;
    }

  };

})();
