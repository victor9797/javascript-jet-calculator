/*
 * Your Dummy ViewModel code goes here
 */
define(['accUtils'],
 function(accUtils) {
    function DummyViewModel() {
      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.

      this.connected = () => {
        accUtils.announce('Dummy page loaded.');
        document.title = "Dummy";
        // Implement further logic if needed
      };
    }

    return DummyViewModel;
  }
);
