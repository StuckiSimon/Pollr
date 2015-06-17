define(['detailView/namespace'], function(namespace) {
  return function(module) {
    module.controller(namespace + ".detailViewController", ['$scope', '$stateParams', function($scope, $stateParams) {
      console.log($stateParams);
    }]);
  };
});
