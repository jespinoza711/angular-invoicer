//Singleton that would load product data from server
angular.module('shared.productService', [])

.service("productService", function(){
  this.getProducts = function(){
    return [
      {name: "Product 1", description: "An exceptionally cool product.", price: 29.99 },
      {name: "Product 2", description: "An exceptionally cool product.", price: 39.99 },
      {name: "Product 3", description: "An exceptionally cool product.", price: 49.99 },
      {name: "Product 4", description: "An exceptionally cool product.", price: 59.99 },
    ];
  };
});
