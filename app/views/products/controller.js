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
    var i;
    //builds selected products list
    for(i = 0; i < products.length; i++){
      if(products[i].selected){
        products[i].quantity = 1;
        selectedProducts.push(products[i]);
      }
    }
    //adds non-duplicate products to invoice, could optimize this later
    for(i = 0; i < selectedProducts.length; i++){
      var hasProductAlready = _.find(invoice.products, function(item){
        return item.name === selectedProducts[i].name;
      });
      if(!hasProductAlready){
        invoice.products.push(selectedProducts[i]);
      }
    }
  };
});