define(['voteView/namespace'], function(namespace) {
  return function(module) {
    module.controller(namespace + ".voteViewController", ['$scope', '$stateParams', function($scope, $stateParams) {
      console.log($stateParams);
    }]);
  };
});
