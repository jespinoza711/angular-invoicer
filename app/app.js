var app = angular.module('app', [
  'ngRoute',
  'app.home',
  'app.invoice',
  'app.products',
]);

app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl:'/app/views/home/template.html',
    controller:'homeController'
  })
  .when('/invoice', {
    templateUrl:'/app/views/invoice/template.html',
    controller:'invoiceController'
  })
  .when('/products', {
    templateUrl:'/app/views/products/template.html',
    controller:'productsController'
  });
});
