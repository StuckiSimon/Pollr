define(['shared/historyHandler/namespace'], function(namespace) {
  return function(module) {
    module.factory(namespace + '.historyService', function() {
      return {
        goBack: function() {
          parent.history.back();
        }
      };
    });
  };
});
