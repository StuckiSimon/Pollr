define(['shared/webServiceManager/namespace'], function(namespace) {
  return function(module) {
    module.config(['$httpProvider', function($httpProvider) {

      // permit CORS cookies
      $httpProvider.defaults.withCredentials = true;

      // Use x-www-form-urlencoded Content-Type
      $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

      /**
       * converts an object to x-www-form-urlencoded serialization.
       * @param {Object} obj
       * @return {String}
       */
      var param = function(obj) {
        var query = '', name, value, fullSubName, subName, subValue, innerObj, i;

        for (name in obj) {
          value = obj[name];

          if (value instanceof Array) {
            for (i = 0; i < value.length; ++i) {
              subValue = value[i];
              fullSubName = name + '[' + i + ']';
              innerObj = {};
              innerObj[fullSubName] = subValue;
              query += param(innerObj) + '&';
            }
          } else if (value instanceof Object) {
            for (subName in value) {
              subValue = value[subName];
              fullSubName = name + '[' + subName + ']';
              innerObj = {};
              innerObj[fullSubName] = subValue;
              query += param(innerObj) + '&';
            }
          } else if (value !== undefined && value !== null)
            query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
        }

        return query.length ? query.substr(0, query.length - 1) : query;
      };

      // Override $http service's default transformRequest
      $httpProvider.defaults.transformRequest = [function(data) {
        return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
      }];

      // interceptor if no connection is available
      $httpProvider.interceptors.push(['$q', '$injector', function($q, $injector) {
        return {
          responseError: function(rejection) {
            console.log(rejection);
            if (rejection.status == 0) {
              var $ionicPopup = $injector.get("$ionicPopup");
              $ionicPopup.alert({
                title: 'Check your Connection',
                template: 'You do not have an internet connection'
              });
            }
            return $q.reject(rejection);
          }
        };
      }]);
    }]);
  };
});
