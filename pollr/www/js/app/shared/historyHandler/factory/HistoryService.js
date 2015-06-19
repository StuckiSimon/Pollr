define(['shared/historyHandler/namespace'], function(namespace) {
  return function(module) {
    module.factory(namespace + '.historyService', [function() {
      var additionalBackSteps = 1;
      return {
        postponeAdditionalBackStep: function() {
          ++additionalBackSteps;
        },
        goBack: function() {
          window.history.go(-additionalBackSteps);
          additionalBackSteps = 1;
        }
      };
    }]);
  };
});
