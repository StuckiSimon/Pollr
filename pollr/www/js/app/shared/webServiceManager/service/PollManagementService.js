define(['shared/webServiceManager/namespace'], function(namespace) {
  return function(module) {
    module.factory(namespace + ".pollManagementService", ['$http', function($http) {
      return {
        loadPosts: function() {
          return $http.get('http://pollr.lamatouren.ch/pollr/polls');
        },
        getPollOptions: function(pollId) {
          return $http.get('http://pollr.lamatouren.ch/pollr/pollOptions?pollId=' + pollId);
        }
      };
    }]);
  };
});