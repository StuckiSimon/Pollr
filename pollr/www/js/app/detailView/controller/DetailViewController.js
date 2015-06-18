define(['detailView/namespace'], function(namespace) {
  return function(module) {
    module.controller(namespace + ".detailViewController", ['$scope', '$stateParams', function($scope, $stateParams) {

      $scope.pollTitle = $stateParams.pollTitle;
      console.log($stateParams);
    }]);
  };
});
