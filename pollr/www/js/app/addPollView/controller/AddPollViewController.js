define(['addPollView/namespace', 'shared/webServiceManager/namespace', 'shared/pollValidator/namespace', 'shared/historyHandler/namespace'], function(namespace, webServiceManagerNamespace, pollValidatorNamespace, historyHandlerNamespace) {
  return function(module) {
    module.controller(namespace + ".addPollViewController", ['$scope', '$ionicModal', webServiceManagerNamespace + '.pollManagementService', pollValidatorNamespace + '.validator', historyHandlerNamespace + '.historyService', function($scope, $ionicModal, pollManagementService, validator, historyService) {

      // Main Screen Data
      $scope.pollData = {
        title: "",
        options: []
      };

      // Modal Data
      $scope.dialogData = {
        newOption: "",
      };

      $scope.showDelete = false;

      $scope.toggleDelete = function() {
        $scope.showDelete = !$scope.showDelete;
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
          name: $scope.dialogData.newOption
        });
        $scope.dialogData.newOption = "";
        $scope.leaveAddChangeOptionDialog();
      };

      $scope.removeOption = function(index) {
        $scope.pollData.options.splice(index, 1);
      };

      $scope.newOptionIsValid = function() {
        return validator.isValidOption($scope.dialogData.newOption, $scope.pollData.options);
      };

      $scope.newPollIsValid = function() {
        return validator.isValidPoll($scope.pollData.title, $scope.pollData.options);
      };

      /**
       * remove unnecessary properties from object such as hashkey
       */
      var cleanAnswers = function() {
        var answersClean = [],
          answers = $scope.pollData.options;
        for (var i in answers) {
          answersClean.push({
            name: answers[i].name
          });
        }
        return answersClean;
      };

      $scope.createPoll = function() {
        pollManagementService.createPoll({
          title: $scope.pollData.title,
          answers: cleanAnswers()
        });
        historyService.goBack();
      };

    }]);
  };
});
