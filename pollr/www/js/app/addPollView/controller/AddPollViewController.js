define(['addPollView/namespace', 'shared/webServiceManager/namespace', 'shared/pollValidator/namespace'], function(namespace, webServiceManagerNamespace, pollValidatorNamespace) {
  return function(module) {
    module.controller(namespace + ".addPollViewController", ['$scope', '$ionicModal', webServiceManagerNamespace + '.pollManagementService', pollValidatorNamespace + '.validator', function($scope, $ionicModal, pollManagementService, validator) {

      // Main Screen Data
      $scope.pollData = {
        title: "",
        options: []
      };

      // Modal Data
      $scope.dialogData = {
        newOption: "",
      };

      var initModal = function() {
        $ionicModal.fromTemplateUrl('js/app/addPollView/template/addChangeOptionDialog.html', function(modal) {
          $scope.addDialog = modal;
        }, {
          scope: $scope,
          animation: 'slide-in-up'
        });
      };
      initModal();

      // has to be registered only once
      $scope.$on('$destroy', function() {
        $scope.addDialog.remove();
      });

      $scope.openAddChangeOptionDialog = function(action) {
        $scope.action = action;
        $scope.addDialog.show();
      };

      $scope.leaveAddChangeOptionDialog = function() {
        $scope.addDialog.remove();
        initModal();
      };

      $scope.addOptionToPollData = function() {
        if (!$scope.newOptionIsValid()) {
          return;
        }
        $scope.pollData.options.push({
          title: $scope.dialogData.newOption
        });
        $scope.dialogData.newOption = "";
        $scope.leaveAddChangeOptionDialog();
      };

      $scope.newOptionIsValid = function() {
        return validator.isValidOption($scope.dialogData.newOption, $scope.pollData.options);
      };

      $scope.newPollIsValid = function() {
        return validator.isValidPoll($scope.pollData.title, $scope.pollData.options);
      };

    }]);
  };
});
