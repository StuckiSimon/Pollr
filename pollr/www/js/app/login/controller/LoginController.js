define(['login/namespace', 'shared/webServiceManager/namespace'], function(namespace, webServiceManagerNamespace) {
  return function(module) {
    module.controller(namespace + ".loginController", ['$scope', '$state', '$localStorage', webServiceManagerNamespace + '.sessionManagementService', function($scope, $state, $localStorage, sessionManagementService) {
      $scope.user = {
        username: "",
        password: ""
      };
      $scope.localStorage = $localStorage.$default({
        count: 5
      });

      console.log($scope.localStorage);

      $scope.onRelease = function() {
        $scope.localStorage.count = $scope.localStorage.count + 1;
        console.log($scope.localStorage);
        alert($scope.localStorage.count)
        console.log($scope.user);
        sessionManagementService.login($scope.user.username, $scope.user.password);
      //$state.go('pollList');
      };
    }]);
  };
});
