'use strict';

describe('Directive: example', function () {

  // load the directive's module
  beforeEach(module('quizApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<example></example>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the example directive');
  }));
});
