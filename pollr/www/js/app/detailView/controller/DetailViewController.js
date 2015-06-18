define(['detailView/namespace', 'shared/webServiceManager/namespace'], function(namespace, webServiceManagerNamespace) {
  return function(module) {
    module.controller(namespace + ".detailViewController", ['$scope', '$stateParams', webServiceManagerNamespace + '.pollManagementService', function($scope, $stateParams, pollManagementService) {
      var pollId = $stateParams.pollId;

      $scope.chart = [
        {
          value: 300,
          color: "#F7464A",
          highlight: "#FF5A5E",
          label: "Red"
        },
        {
          value: 50,
          color: "#46BFBD",
          highlight: "#5AD3D1",
          label: "Green"
        },
        {
          value: 100,
          color: "#FDB45C",
          highlight: "#FFC870",
          label: "Yellow"
        }
      ];

      $scope.options = {

      };

      $scope.pollData = {
        options: []
      };

      pollManagementService.getPollStats(pollId).success(function(data) {
        console.log(data);
        $scope.pollData.options = data;
      });
    }]);
  };
});
