'use strict';

describe('Service: except', function () {

  // load the service's module
  beforeEach(module('quizApp'));

  // instantiate service
  var except;
  beforeEach(inject(function (_except_) {
    except = _except_;
  }));

  it('should do something', function () {
    expect(!!except).toBe(true);
  });

});
