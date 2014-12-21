(function() {
    'use strict';
    /**
     * @ngdoc directive
     * @name quizApp.directive:except
     * @description
     * # except is handeling the error in the application
     * then displaying the error as a growl notification
     */
    angular.module('quizApp', [])
        .factory('exceptionHandler', function() {
            return function(exception, cause) {
                exception.message += ' (caused by "' + cause + '")';
                throw exception;
            };
    });
})();
