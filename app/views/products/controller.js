angular.module('app.products', [
  'app.products.productTable'
])

.controller("ProductsController", function($scope){
  $scope.products = [
    {name: "Product 1", description: "A very cool product", price: 49.99 },
    {name: "Product 2", description: "A very cool product", price: 49.99 },
    {name: "Product 3", description: "A very cool product", price: 49.99 },
  ];
});