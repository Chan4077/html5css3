angular.module('HTMLCSSApp', ['ngAnimate', 'ngAria', 'ngMaterial', 'ngMessages', 'app.config', 'app.directives'])
.controller('HomeController', function($scope) {
  console.log('Loaded!');
  $scope.items = [
    {text:"Test"},
    {text:"Wow"}
  ]
  $scope.doSomething = function(item) {
    console.log('Item is: '+item);
  }
})
