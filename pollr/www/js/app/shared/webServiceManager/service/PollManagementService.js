define(['shared/webServiceManager/namespace'], function(namespace) {
  return function(module) {
    module.factory(namespace + ".pollManagementService", ['$http', function($http) {
      var baseUrl = 'http://pollr.lamatouren.ch/pollr';
      return {
        loadPosts: function() {
          return $http.get(baseUrl + '/polls');
        },
        getPollOptions: function(pollId) {
          return $http.get(baseUrl + '/pollOptions?pollId=' + pollId);
        },
        getPollStats: function(pollId) {
          return $http.get(baseUrl + '/pollStat?pollId=' + pollId);
        },
        setPollVote: function(answerId) {
          return $http.post(baseUrl + '/vote?answerId=' + answerId);
        },
        createPoll: function(poll) {
          return $http.post(baseUrl + '/poll', poll);
        }
      };
    }]);
  };
});
