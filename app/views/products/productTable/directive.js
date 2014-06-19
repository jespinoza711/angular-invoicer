angular.module('app.products.productTable', [])

.directive("productTable", function(){
  var template = '<div class="pt_table">'+
                  '<div class="pt_tr">'+
                    '<div class="pt_th"></div>'+
                    '<div class="pt_th">Product Name</div>'+
                    '<div class="pt_th">Description</div>'+
                    '<div class="pt_th">List Price</div>'+
                  '</div>'+
                  '<div class="transclude"></div>'+
                 '</div>';
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'app/views/products/productTable/table.html',
    link:function(scope, element, attrs, ctrl, transclude){
      element.find('.transclude').replaceWith(transclude());
    }
  };
})
.directive("product", function(){
  var template = '<div class="pt_tr">'+
                  '<div class="pt_td"><input type="checkbox" name="selected"></div>'+
                  '<div class="pt_td">{{name}}</div>'+
                  '<div class="pt_td">{{description}}</div>'+
                  '<div class="pt_td">{{price}}</div>'+
                 '</div>';
  return {
    restrict: 'E',
    replace: true,
    template: template,
    scope: {
      name: '@',
      price: '@',
      description: '@',
    }
  };
});