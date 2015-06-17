define(['login/namespace', 'shared/webServiceManager/namespace'], function(namespace, webServiceManagerNamespace) {
  return function(module) {
    module.controller(namespace + ".loginController", ['$scope', '$state', '$localStorage', webServiceManagerNamespace + '.sessionManagementService', function($scope, $state, $localStorage, sessionManagementService) {
      $scope.storage = $localStorage.$default({
        user: {
          username: "",
          password: ""
        }
      });

      $scope.onRelease = function() {
        sessionManagementService.login($scope.storage.user.username, $scope.storage.user.password);
        $state.go('pollList');
      };
    }]);
  };
});
