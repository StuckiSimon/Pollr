define(['shared/webServiceManager/namespace'], function(namespace) {
  return function(module) {
    module.factory(namespace + ".sessionManagementService", ['$http', function($http) {
      return {
        login: function(username, password) {
          $http.post('http://pollr.lamatouren.ch/pollr/authenticate', {
            username: username,
            password: password
          }).success(function(data, status, headers, config) {
            console.log(data, status);
            $http.get('http://pollr.lamatouren.ch/pollr/isLoggedIn').success(function() {
              console.log(arguments);
            })
          // this callback will be called asynchronously
          // when the response is available
          }).error(function(data, status, headers, config) {
            console.error(data, status);
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          });
        }
      };
    }]);
  };
});
