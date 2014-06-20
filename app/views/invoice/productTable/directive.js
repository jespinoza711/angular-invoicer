angular.module('app.invoice.productTable', [])

.directive("invProductTable", function(){
  return {
    restrict: 'E',
    templateUrl: 'app/views/invoice/productTable/template.html',
    scope: {
      products: '=',
    },
    controller:function($scope){
      $scope.calcTotal = function(){
        var total = 0;
        for(var i = 0; i < $scope.products.length; i++){
          var item = $scope.products[i];
          total += item.price * item.quantity;
        }
        return total;
      };
      $scope.deleteProduct = function(product){
        for(var i = 0; i<$scope.products.length; i++){
          if($scope.products[i] === product){
            $scope.products.splice(i, 1);
            break;
          }
        }
      };
    }
  };
});