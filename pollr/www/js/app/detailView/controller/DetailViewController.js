define(['detailView/namespace', 'shared/webServiceManager/namespace'], function(namespace, webServiceManagerNamespace) {
  return function(module) {
    module.controller(namespace + ".detailViewController", ['$scope', '$stateParams', webServiceManagerNamespace + '.pollManagementService', function($scope, $stateParams, pollManagementService) {
      var pollId = $stateParams.pollId;

      $scope.pollTitle = $stateParams.pollTitle;

      $scope.pollData = {
        chart: [],
        table: []
      };

      pollManagementService.getPollStats(pollId).success(function(data) {
        console.log(data);
        var chart = [],
          table = [],
          answers = data.answers;
        var color = ['#1abc9c', '#3498db', '#9b59b6', '#f1c40f', '#27ae60', '#c0392b'];
        for (var i in answers) {
          var answer = answers[i];
          chart.push({
            value: parseInt(answer.votes),
            color: color[i]
          });
          table.push({
            title: answer.name,
            votes: answer.votes,
            color: color[i]
          });
        }
        $scope.pollData.chart = chart;
        $scope.pollData.table = table;

      });
    }]);
  };
});
