'use strict';

describe('Service: jsqestions', function () {

  // load the service's module
  beforeEach(module('quizApp'));

  // instantiate service
  var jsqestions;
  beforeEach(inject(function (_jsqestions_) {
    jsqestions = _jsqestions_;
  }));

  it('should do something', function () {
    expect(!!jsqestions).toBe(true);
  });

});
