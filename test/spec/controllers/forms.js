'use strict';

describe('Controller: FormsctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('quizApp'));

  var FormsctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FormsctrlCtrl = $controller('FormsctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
