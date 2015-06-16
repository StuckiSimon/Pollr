define([], function() {
  return function(module) {
    module.controller("loginController", ['$scope', function($scope) {
      $scope.username = "";
    }]);
  };
});
