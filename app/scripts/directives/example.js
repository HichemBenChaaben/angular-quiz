(function() {
    'use strict';


    /**
    *  Module
    *
    * Description
    */
    angular.module('myDirectives', [])
        .directive('sayHi', ['$route', function() {
        // Runs during compile
        return {
            name: 'sayhi',
            // priority: 1,
            // terminal: true,
            // scope: {}, // {} = isolate, true = child, false/undefined = no change
            // controller: function($scope, $element, $attrs, $transclude) {},
            // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
            restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
            template: '<div>Hi mother fucker ! this element will load instead of that boolshit </div>',
            // templateUrl: '',
            // replace: true,
            // transclude: true,
            // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
            link: function($scope, iElm, iAttrs, controller) {
                console.log('this is the link function');
            }
        };
    }]);
})();

