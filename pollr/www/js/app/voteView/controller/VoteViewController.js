define(['voteView/namespace', 'shared/webServiceManager/namespace'], function(namespace, webServiceManagerNamespace) {
  return function(module) {
    module.controller(namespace + ".voteViewController", ['$scope', '$state', '$stateParams', webServiceManagerNamespace + '.pollManagementService', function($scope, $state, $stateParams, pollManagementService) {
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
        return !!selectedOption;
      };

      $scope.saveVote = function() {
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
