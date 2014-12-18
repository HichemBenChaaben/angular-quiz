'use strict';

describe('Controller: JsquizCtrl', function () {

  // load the controller's module
  beforeEach(module('quizApp'));

  var JsquizCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    JsquizCtrl = $controller('JsquizCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
