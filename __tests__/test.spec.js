var chai = require('chai');
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);

var assert = chai.assert;

chai.should()

describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal(-1, [1,2,3].indexOf(4));
        });
    });
});

describe('promiseTest', function() {
    it('should resolve a promise', function() {
        return Promise.resolve(2 + 2).should.eventually.equal(4);
    })
});