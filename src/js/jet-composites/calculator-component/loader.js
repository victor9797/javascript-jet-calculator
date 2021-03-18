/**
  Copyright (c) 2015, 2021, Oracle and/or its affiliates.
  Licensed under The Universal Permissive License (UPL), Version 1.0
  as shown at https://oss.oracle.com/licenses/upl/

*/
define(['ojs/ojcomposite', 'text!./calculator-component-view.html', './calculator-component-viewModel', 'text!./component.json', 'css!./calculator-component-styles'],
  function(Composite, view, viewModel, metadata) {
    Composite.register('calculator-component', {
      view: view,
      viewModel: viewModel,
      metadata: JSON.parse(metadata)
    });
  }
);