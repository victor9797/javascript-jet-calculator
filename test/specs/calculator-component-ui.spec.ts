// Import the viewmodel definition
import ViewModel from 'calculator-component/calculator-component-viewModel.js';

// Import the loader so that the composite is registered with JET
import 'calculator-component/loader';

// Import the Context class from ojcontext
import * as Context from 'ojs/ojcontext';

declare const expect: Chai.ExpectStatic;

describe('calculator-component CCA unit tests', () => {
  const markup = `
    <calculator-component first-number="1" operation="sum" second-number="2">
    </calculator-component>
  `;

  let calculator: HTMLElement;
  /**
   * Setup the fixture with the markup and re-query the "calculator" variable so that
   * each test case gets a fresh new copy of the element.
   */
  async function setup() {
    fixture.set(markup);
    calculator = document.querySelector('calculator-component') as HTMLElement;
    expect(calculator).not.to.be.null;
    // Wait for BusyContext to clear for the element
    await Context.getContext(calculator).getBusyContext().whenReady();
  }

  describe('UI tests', () => {
    // Setup the fixture before each test case
    beforeEach(async () => await setup());




    // it('can flip the calculator with mouse click', async () => {
    //   const frontSide = calculator.querySelector('.demo-calculator-front-side') as HTMLElement;
    //   expect(frontSide).not.to.be.null;
    //   frontSide.click();
    //   await Context.getContext(calculator).getBusyContext().whenReady();
    //   expect(calculator.querySelector('.demo-calculator-flipped')).not.to.be.null;
    // });

    it('set value for first number', async () => {
      const field = calculator.querySelector('#firstNumber') as HTMLElement;
      expect(field).not.to.be.null;
      field.click();
    });

    afterEach(() => fixture.cleanup());
  });

  function getInputsByValue(value: any) {
    var allInputs = document.getElementsByTagName("input");
    for(var x=0;x<allInputs.length;x++)
        if(allInputs[x].value == value)
          return allInputs[x]
    return null;
  }

});
