angular.module('app.home.invoiceTable', [
  'shared.minDigitsFilter',
  'shared.invoiceService'
])

.directive("hmeInvoiceTable", function(){
  return {
    restrict: 'E',
    templateUrl: 'app/views/home/invoiceTable/template.html',
    scope: {
      invoices: '=',
    },
    controller:function($scope, invoiceService){
      $scope.editInvoice = function(num){
        console.log("edit invoice:", num);
        invoiceService.setCurrentInvoice(num);
      };
      $scope.deleteInvoice = function(num){
        console.log("delete invoice:", num);
        invoiceService.deleteInvoice(num);
        $scope.invoices = invoiceService.getPastInvoices();
        
      };
    }
  };
});
