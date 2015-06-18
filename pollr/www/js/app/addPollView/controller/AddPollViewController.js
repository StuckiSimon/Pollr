define(['addPollView/namespace', 'shared/webServiceManager/namespace'], function(namespace, webServiceManagerNamespace) {
  return function(module) {
    module.controller(namespace + ".addPollViewController", ['$scope', '$ionicModal', webServiceManagerNamespace + '.pollManagementService', function($scope, $ionicModal, pollManagementService) {

      var initModal = function() {
        $ionicModal.fromTemplateUrl('js/app/addPollView/template/addChangeOptionDialog.html', function(modal) {
          $scope.addDialog = modal;
        }, {
          scope: $scope,
          animation: 'slide-in-up'
        });
      };
      initModal();

      $scope.openAddChangeOptionDialog = function(action) {
        $scope.action = action;
        $scope.addDialog.show();
      };

      $scope.leaveAddChangeOptionDialog = function() {
        $scope.addDialog.remove();
        initModal();
      };

    }]);
  };
});
