angular.module('app.products', [
  'app.products.productTable',
  'shared.productService',
  'shared.invoiceService'
])

.controller("productsController", function($scope, productService, invoiceService){
  var invoice = invoiceService.getCurrentInvoice();
  $scope.products = productService.getProducts();

  $scope.saveProductsToInvoice = function(){
    var products = $scope.products;
    var selectedProducts = [];
    //builds selected products list
    for(var i = 0; i < products.length; i++){
      if(products[i].selected){
        products[i].quantity = 1;
        selectedProducts.push(products[i]);
      }
    }
    invoiceService.addProductsToInvoice(selectedProducts);

    
  };
});