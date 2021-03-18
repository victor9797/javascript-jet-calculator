/**
  Copyright (c) 2015, 2021, Oracle and/or its affiliates.
  Licensed under The Universal Permissive License (UPL), Version 1.0
  as shown at https://oss.oracle.com/licenses/upl/

*/
'use strict';
define([
    'knockout', 'ojL10n!./resources/nls/calculator-component-strings',
    'ojs/ojcontext','ojs/ojarraydataprovider', 'ojs/ojknockout', 
    'ojs/ojinputnumber','ojs/ojformlayout', 'ojs/ojbutton', 
    "ojs/ojselectsingle", 'ojs/ojlabel', 'ojs/ojformlayout'], 

    function (ko, componentStrings, Context, ArrayDataProvider) {
        
      function CalculatorComponentModel(context) {
          var self = this;

          /**  Calculator functionality */
          CalculatorComponentModel.prototype._add = function (first, second ) {
            return first + second;
          };

          CalculatorComponentModel.prototype._substract = function (first, second ) {
            return first - second;
          };

          CalculatorComponentModel.prototype._multiply = function (first, second ) {
            return first * second;
          };

          CalculatorComponentModel.prototype._divide = function (first, second ) {
            return first / second;
          }; 

          self.composite = context.element;

          /** Init code */
          
          //At the start of your viewModel constructor
          var busyContext = Context.getContext(context.element).getBusyContext();
          var options = {"description": "Web Component Startup - Waiting for data"};
          self.busyResolve = busyContext.addBusyState(options);
          self.composite = context.element;

          //Example observable
          self.messageText = ko.observable('Hello from calculator-component');
          self.properties = context.properties;
          self.res = componentStrings['calculator-component'];

          /** End init code */


          /** Set up our component */

          self.firstNumber = 0
          self.secondNumber = 0
          self.operation = 'sum'
          self.result = 0

          // Parsing context properties
          if (context.properties.firstNumber) {
              self.firstNumber = context.properties.firstNumber
          }

          if (context.properties.secondNumber) {
            self.secondNumber = context.properties.secondNumber
          }

          if (context.properties.operation) {
            self.operation = context.properties.operation
          }

          // Set up form options and values
          self.operations = [
            { value: "sum",       label: "Sum" },
            { value: "substract", label: "Substract" },
            { value: "divide",    label: "Divide" },
            { value: "multiply",  label: "Multiply" },
          ]

          self.operationsSDP = new ArrayDataProvider(self.operations, {
            keyAttributes: "value",
          });

          /** End setup code */

          /** Custom defined event */
          CalculatorComponentModel.prototype.onCalculate = function (event) {

            // Do operation
            switch(self.operation) {
              case "sum":
                self.result = self._add(self.firstNumber, self.secondNumber)
                break;

              case "substract":
                self.result = self._substract(self.firstNumber, self.secondNumber)
                break;

              case "divide":
                self.result = self._divide(self.firstNumber, self.secondNumber)
                break;

              case "multiply":
                self.result = self._multiply(self.firstNumber, self.secondNumber)
                break;
            }

            // Set value to response field 
            var node = document.getElementById("result");
            var busyContext = oj.Context.getContext(node).getBusyContext();

            busyContext.whenReady().then(function () {
                var node = document.getElementById("result");
                node.value = self.result
            });

            //Raise the custom event
            self.composite.dispatchEvent(new CustomEvent('onCalculate', {}));
          };

          self.busyResolve();
      };



      return CalculatorComponentModel;
});
