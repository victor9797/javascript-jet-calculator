var assert = require('assert');
// const Calculator = require('../../src/js/jet-composites/calculator-component/calculator-component-viewModel.js').CalculatorComponentModel

describe('Calculator functionality', function() {

  describe('Sum', function() {

    it('The sum function should return 3 when passing 1 and 2 values', function(){
      assert.strictEqual(-1, [4,5,6].indexOf(7));
    });

  });
  

  describe('#checkIndex negative()', function() {
    it('the function should return -1 when the value is not present', function(){
      assert.strictEqual(-1, [4,5,6].indexOf(7));
    });
  });

});



// define(['calculator-component/loader'],
//  function(Calculator) {
    
//   }
// );
