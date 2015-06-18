define(['pollList/namespace', 'shared/webServiceManager/namespace'], function(namespace, webServiceManagerNamespace) {
  return function(module) {
    module.controller(namespace + ".pollListController", ['$scope', '$state', webServiceManagerNamespace + '.pollManagementService', function($scope, $state, pollManagementService) {

      $scope.pollData = {
        list: []
      };

      $scope.reloadPollList = function() {
        pollManagementService.loadPosts().success(function(data) {
          $scope.pollData.list = data;
        });
      };

      $scope.openAddPollView = function() {
        $state.go('addPollView');
      };

      $scope.openPoll = function(poll) {
        // TODO: server doesn't return required data -> no alreadyVoted property
        if (poll.voted) {
          // open stats view
          $state.go('detailView', {
            pollId: poll.id,
            pollTitle: poll.title
          });
        } else {
          // open vote view
          $state.go('voteView', {
            pollId: poll.id,
            pollTitle: poll.title
          });
        }
      };

      $scope.reloadPollList();

    }]);
  };
});
