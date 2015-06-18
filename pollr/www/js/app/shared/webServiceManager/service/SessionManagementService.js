define(['shared/webServiceManager/namespace'], function(namespace) {
  return function(module) {
    module.factory(namespace + ".sessionManagementService", ['$http', function($http) {
      return {
        login: function(username, password, success, error) {
          $http.post('http://pollr.lamatouren.ch/pollr/authenticate', {
            username: username,
            password: password
          })
          .success(success)
          .error(error);
        }
      };
    }]);
  };
});
