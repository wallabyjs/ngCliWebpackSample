describe("Test", function () {
  var _FOO_TYPES;

  beforeEach(module('test'));
  beforeEach(inject(function (FOO_TYPES) {
    _FOO_TYPES = FOO_TYPES;
  }));

  it('should have FOO_TYPES constants', function () {
    expect(_FOO_TYPES.FOO).toBe('foo');
  });
});