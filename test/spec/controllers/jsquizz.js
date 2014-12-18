'use strict';

describe('Controller: JsquizzCtrl', function () {

  // load the controller's module
  beforeEach(module('quizApp'));

  var JsquizzCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    JsquizzCtrl = $controller('JsquizzCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
