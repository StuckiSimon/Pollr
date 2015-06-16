define(['login/namespace'], function(namespace) {
  return function(module) {
    module.controller(namespace + ".loginController", ['$scope', '$state', function($scope, $state) {
      $scope.user = {
        username: "",
        password: ""
      };
      $scope.onRelease = function() {
        console.log($scope.user);
        $state.go('pollList');
      };
    }]);
  };
});
