const React  = require('react');
const { shallow } = require('enzyme');
const Section1 = require('../../src/components/Body/Section1');

describe('Section1', function() {
  it('type should be an object', function() {
    expect(typeof Section1).toBe('object');
  });
  it('type should not be a function', function() {
    expect(typeof Section1).not.toBe('function');
  });
});