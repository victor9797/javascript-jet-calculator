// Import the loader so that the composite is registered with JET
import 'demo-card/loader';
// Import the Context class from ojcontext
import * as Context from 'ojs/ojcontext';
// Knockout libraries
import * as ko from 'knockout';
import 'ojs/ojknockout';

declare const expect: Chai.ExpectStatic;

describe('demo-card CCA unit tests with Knockout', () => {
  const markup = `
    <div id="card-holder">
      <demo-card
      name="[[name]]"
      avatar="[[avatar]]"
      work-title="[[workTitle]]"
      work-number="[[workNum]]"
      email="[[email]]"
      ></demo-card>
    </div>
  `;

  let card: HTMLElement;
  /**
   * Setup the fixture with the markup and re-query the "card" variable so that
   * each test case gets a fresh new copy of the element.
   */
  async function setup() {
    fixture.set(markup);
    card = document.querySelector('demo-card') as HTMLElement;
    expect(card).not.to.be.null;
    // Apply our viewmodel to the Knockout bindings
    ko.applyBindings({
      name: 'Deb Raphaely',
      avatar: 'base/web/js/jet-composites/demo-card/1.0.15/extension/demo/images/deb-raphaely.png',
      workTitle: 'Purchasing Director',
      workNum: 5171278899,
      email: 'deb.raphaely@oracle.com'
    }, card);
    // Wait for BusyContext to clear for the element
    await Context.getContext(card).getBusyContext().whenReady();
  }

  describe('UI tests', () => {
    // Setup the fixture before each test case
    beforeEach(async () => await setup());

    it('can flip the card with mouse click', async () => {
      const frontSide = card.querySelector('.demo-card-front-side') as HTMLElement;
      expect(frontSide).not.to.be.null;
      frontSide.click();
      await Context.getContext(card).getBusyContext().whenReady();
      expect(card.querySelector('.demo-card-flipped')).not.to.be.null;
    });

    afterEach(() => fixture.cleanup());
  });

});
