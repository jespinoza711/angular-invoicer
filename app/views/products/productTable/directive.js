angular.module('app.products.productTable', [])

.directive("prdProductTable", function(){
  return {
    restrict: 'E',
    templateUrl: 'app/views/products/productTable/template.html',
    scope: {
      products: '=',
    },
    controller:function($scope){
      
    }
  };
});