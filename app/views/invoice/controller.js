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
  $scope.sendPdf = function(){
    console.log("Sending PDF - placeholder");
  };
});