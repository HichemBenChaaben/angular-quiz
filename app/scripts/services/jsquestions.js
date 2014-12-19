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
        .service('jsquestions', ['$http', getQuestions]);

    function getQuestions($http) {
        // AngularJS will instantiate a singleton by calling "new" on this function
        return $http.get('js-questions.json')
            .success(function(data) {
                return data.slides;
            })
            .error(function() {
                alert('error in getting the file');
            });
    };
})();
