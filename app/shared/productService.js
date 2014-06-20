angular.module('shared.productService', [])

.service("productService", function(){
  this.getProducts = function(){
    return [
      {name: "Product 1", description: "A very cool product", price: 29.99 },
      {name: "Product 2", description: "A very cool product", price: 39.99 },
      {name: "Product 3", description: "A very cool product", price: 49.99 },
    ];
  };
});
