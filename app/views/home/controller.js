angular.module('app.home', [
  'app.home.invoiceTable',
  'shared.invoiceService'
])

.controller("homeController", function($scope, invoiceService){
  $scope.invoices = invoiceService.getPastInvoices();

  $scope.newInvoice = function(){
    invoiceService.clearCurrentInvoice();
  };
});