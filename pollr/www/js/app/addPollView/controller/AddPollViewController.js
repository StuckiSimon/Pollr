define(['addPollView/namespace', 'shared/webServiceManager/namespace'], function(namespace, webServiceManagerNamespace) {
  return function(module) {
    module.controller(namespace + ".addPollViewController", ['$scope', '$ionicModal', webServiceManagerNamespace + '.pollManagementService', function($scope, $ionicModal, pollManagementService) {

      var optionMinTextLength = 2,
        titleMinTextLength = 4;

      $scope.pollData = {
        title: "",
        options: []
      };

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

      $scope.openAddChangeOptionDialog = function(action) {
        $scope.action = action;
        $scope.addDialog.show();
      };

      $scope.leaveAddChangeOptionDialog = function() {
        $scope.addDialog.remove();
        initModal();
      };

      $scope.addOptionToPollData = function() {
        if ($scope.dialogData.newOption.length < optionMinTextLength) {
          return;
        }
        $scope.pollData.options.push({
          title: $scope.dialogData.newOption
        });
        $scope.dialogData.newOption = "";
        $scope.leaveAddChangeOptionDialog();
      };

      $scope.newOptionIsValid = function() {
        var option = $scope.dialogData.newOption,
          options = $scope.pollData.options;
        if (option.length >= optionMinTextLength) {
          for (var i in options) {
            if (option === options[i].title) {
              return false;
            }
          }
          return true;
        }
        return false;
      };

      $scope.newPollIsValid = function() {
        var options = $scope.pollData.options,
          title = $scope.pollData.title;
        if (title.length >= titleMinTextLength && options.length > 1) {
          return true;
        }
        return false;
      };

    }]);
  };
});
