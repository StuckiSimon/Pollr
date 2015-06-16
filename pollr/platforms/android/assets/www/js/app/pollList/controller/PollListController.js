define(['pollList/namespace'], function(namespace) {
  return function(module) {
    module.controller(namespace + ".pollListController", ['$scope', function($scope) {
      $scope.user = {
        username: "",
        password: ""
      };
      $scope.onRelease = function() {
        console.log($scope.user);
      };
    }]);
  };
});
