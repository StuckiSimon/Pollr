define(['shared/pollValidator/namespace'], function(namespace) {
  return function(module) {
    module.factory(namespace + ".validator", [function() {

      // Constants
      var optionMinTextLength = 2,
        titleMinTextLength = 4;

      return {
        isValidPoll: function(title, options) {
          return title.length >= titleMinTextLength && options.length > 1;
        },
        isValidOption: function(newOption, existingOptions) {
          if (newOption.length >= optionMinTextLength) {
            for (var i in existingOptions) {
              if (newOption === existingOptions[i].title) {
                return false;
              }
            }
            return true;
          }
          return false;
        }
      };
    }]);
  };
});
