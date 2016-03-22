var app = angular.module('app',[]);
app.directive('motionNav',function(){
  var directive ={
    restrict:'E',
    link:link,
    templateUrl:'motionNav/motionNav.partial.html',
    controller:motionNavController,
    replace:true
  };
  return directive;
  function link(scopt, element, attrs){
    return;
  }
  motionNavController.$inject = ['$scope'];
  function motionNavController($scope){
    $scope.open = false;
  }
});
