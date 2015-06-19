define(['voteView/namespace', 'shared/webServiceManager/namespace', 'shared/historyHandler/namespace'], function(namespace, webServiceManagerNamespace, historyHandlerNamespace) {
  return function(module) {
    module.controller(namespace + ".voteViewController", ['$scope', '$state', '$stateParams', webServiceManagerNamespace + '.pollManagementService', historyHandlerNamespace + '.historyService', function($scope, $state, $stateParams, pollManagementService, historyService) {
      var pollId = $stateParams.pollId;
      $scope.pollTitle = $stateParams.pollTitle;

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

      $scope.hasSelected = function() {
        return selectedOption !== undefined;
      };

      $scope.saveVote = function() {
        historyService.postponeAdditionalBackStep();
        pollManagementService.setPollVote($scope.pollData.options[selectedOption].id).success(function(data) {
          $state.go('detailView', {
            pollId: pollId,
            pollTitle: $scope.pollTitle
          });
        });
      };
    }]);
  };
});
