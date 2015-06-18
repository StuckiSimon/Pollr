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

      var selectedOption = undefined;

      $scope.selectOption = function(index) {
        if (selectedOption !== undefined) {
          $scope.pollData.options[selectedOption].selected = false;
        }
        selectedOption = index;
        $scope.pollData.options[selectedOption].selected = true;
      };
    }]);
  };
});
