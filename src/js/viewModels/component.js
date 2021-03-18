/*
 * Your Component ViewModel code goes here
 */
define(['accUtils', 'calculator-component/loader'],
 function(accUtils) {
    function ComponentViewModel() {
      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.

      this.connected = () => {
        accUtils.announce('Component page loaded.');
        document.title = "Component";
        // Implement further logic if needed
      };

    }

    return ComponentViewModel;
  }
);
