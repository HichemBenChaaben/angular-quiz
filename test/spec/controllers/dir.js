'use strict';

describe('Controller: DirCtrl', function () {

  // load the controller's module
  beforeEach(module('quizApp'));

  var DirCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DirCtrl = $controller('DirCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
