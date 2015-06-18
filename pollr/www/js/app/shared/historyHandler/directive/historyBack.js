define(['shared/historyHandler/namespace'], function(namespace) {
  return function(module) {
    module.directive('historyBack', function() {
      return {
        replace: true,
        template: '<button class="button-back ion-chevron-left" data-ng-click="goBack()"></button>',
        controller: ['$scope', function($scope) {
          $scope.goBack = function() {
            parent.history.back();
          };
        }]
      };
    });
  };
});
