define(['voteView/namespace', 'shared/webServiceManager/namespace'], function(namespace, webServiceManagerNamespace) {
  return function(module) {
    module.controller(namespace + ".voteViewController", ['$scope', '$stateParams', webServiceManagerNamespace + '.pollManagementService', function($scope, $stateParams, pollManagementService) {
      var pollId = $stateParams.pollId;

      $scope.pollData = {
        options: []
      };

      pollManagementService.getPollOptions(pollId).success(function(data) {
        $scope.pollData.options = data;
      });
    }]);
  };
});
