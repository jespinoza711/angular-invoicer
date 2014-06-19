angular.module('app.invoice', [])

.controller("InvoiceController", function($scope){
  $scope.invoiceNumber = "00001";
  $scope.invoiceDate = "5/21/2014";
});