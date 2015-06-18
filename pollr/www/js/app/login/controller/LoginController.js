define(['login/namespace', 'shared/webServiceManager/namespace'], function(namespace, webServiceManagerNamespace) {
  return function(module) {
    module.controller(namespace + ".loginController", ['$scope', '$state', '$localStorage', webServiceManagerNamespace + '.sessionManagementService', function($scope, $state, $localStorage, sessionManagementService) {
      $scope.storage = $localStorage.$default({
        user: {
          username: "",
          password: ""
        }
      });
      $scope.authenticationFailed = false;
      $scope.loginSuccess = function() {
        $state.go('pollList');
      }
      $scope.loginError = function() {
        $scope.authenticationFailed = true;
      }
      $scope.onRelease = function() {
        sessionManagementService.login($scope.storage.user.username, $scope.storage.user.password, $scope.loginSuccess, $scope.loginError);
      };
    }]);
  };
});
