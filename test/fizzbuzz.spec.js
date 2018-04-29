import assert from 'assert';
import fizzbuzz from '../src/fizzbuzz';

describe('FizzBuzz', function () {
    it('should return a list of the correct size', function () {
        const output = fizzbuzz.run(1, 5);
        assert.strictEqual(output.length, 5);
    });
});


describe('getResult', function () {
    it('should return the passed number for non-multiples of 3 and 5', function () {
        assert.strictEqual(fizzbuzz.getResult(1), 1);
    });
});


