var assert = chai.assert;

describe('Calculator', function() {

  describe('properAppend', function() {

    it('append 1 to empty', function() {
      assert.equal(properAppend("", "1"), '1');
    });

    it('append 2 to 0', function() {
      assert.equal(properAppend("0", "2"), '2');
    });

    it('append 4 to 3', function() {
      assert.equal(properAppend("3", "4"), '34');
    });

    // Still need tests with decimals

  });

  describe('sign', function() {

    it('sign on 0', function() {
      assert(sign(0), 0);
    });

    it('sign on negative number', function() {
      assert(sign(-1), 1);
    });

    it('sign on positive number', function() {
      assert(sign(1), -1);
    });

    it('sign on empty string', function() {
      assert(sign(''), 0);
    });

  });


});

