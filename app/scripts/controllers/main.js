(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name quizApp.controller:MainCtrl
     * @description
     * # MainCtrl
     * Controller of the quizApp
     */
    angular.module('quizApp')
        .controller('MainCtrl', ['$scope', '$state', initQuiz]);

    function initQuiz($scope, $state) {
            $scope.styles = [
                'arta',
                'ascetic',
                'atelier-dune.dark',
                'atelier-dune.light',
                'atelier-forest.dark',
                'atelier-forest.light',
                'atelier-heath.dark',
                'atelier-heath.light',
                'atelier-lakeside.dark',
                'atelier-lakeside.light',
                'atelier-seaside.dark',
                'atelier-seaside.light',
                'brown_paper',
                'codepen-embed',
                'color-brewer',
                'dark',
                'default',
                'docco',
                'far',
                'foundation',
                'github',
                'googlecode',
                'hybrid',
                'idea',
                'ir_black',
                'kimbie.dark',
                'kimbie.light',
                'magula',
                'mono-blue',
                'monokai',
                'monokai_sublime',
                'obsidian',
                'paraiso.dark',
                'paraiso.light',
                'pojoaque',
                'railscasts',
                'rainbow',
                'school_book',
                'solarized_dark',
                'solarized_light',
                'sunburst',
                'tomorrow',
                'tomorrow-night',
                'tomorrow-night-blue',
                'tomorrow-night-bright',
                'tomorrow-night-eighties',
                'vs',
                'xcode',
                'zenburn'
            ];
            $scope.stylesheet = 'monokai_sublime';
            $scope.goto = function (arg) {
                var arg = arg.toString();
                $state.go(arg);
            }
        };
})();
