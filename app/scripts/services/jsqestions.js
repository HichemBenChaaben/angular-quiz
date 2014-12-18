(function() {
    'use strict';

    /**
     * @ngdoc service
     * @name quizApp.jsqestions
     * @description
     * # jsqestions
     * Service in the quizApp.
     */
    angular.module('quizApp')
        .service('jsqestions', getQuestions);

    function getQuestions() {
        // AngularJS will instantiate a singleton by calling "new" on this function
        $http.get('js-questions.json')
            .success(function(data) {
                $scope.questions = data;
                qtotal = data.length;
                $scope.data = $scope.questions[qindex].slide;
            })
            .error(function() {
                alert('error in getting the file');
            });
    }
})();
