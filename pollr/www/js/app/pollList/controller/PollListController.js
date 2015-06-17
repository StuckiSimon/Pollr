define(['pollList/namespace'], function(namespace) {
  return function(module) {
    module.controller(namespace + ".pollListController", ['$scope', '$state', function($scope, $state) {
      $scope.pollList = [{
        title: "Mittagesse",
        id: 1,
        alreadyVoted: true
      }, {
        title: "Code",
        id: 2,
        alreadyVoted: false
      }];

      $scope.openPoll = function(poll) {
        if (poll.alreadyVoted) {
          // open stats view

        } else {
          // open vote view
          $state.go('voteView', {
            pollId: poll.id
          });
        }
      };

    }]);
  };
});
