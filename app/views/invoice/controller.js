angular.module('app.invoice', [
  'app.invoice.productTable',
  'shared.invoiceService',
  'shared.minDigitsFilter',
])

.controller("invoiceController", function($scope, invoiceService){
  $scope.invoice = invoiceService.getCurrentInvoice();

  $scope.saveInvoice = function(){
    console.log("Saving Invoice");
    invoiceService.saveCurrentInvoice();
  };
  $scope.printInvoice = function(){
    console.log("Printing Invoice");
    window.print();
  };
});