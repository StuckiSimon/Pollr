require([
  "login/namespace",
  "pollList/namespace",
  "voteView/namespace",
  "detailView/namespace",
  "shared/webServiceManager/namespace",
  "../../lib/angularjs/localstorage",
  "login/module",
  "pollList/module",
  "voteView/module",
  "detailView/module",
  "shared/webServiceManager/module"],
  function(loginNamespace, pollListNamespace, webServiceManagerNamespace, voteViewNamespace, detailViewNamespace) {
    var app = angular.module("main", ["ionic", loginNamespace,
      pollListNamespace,
      webServiceManagerNamespace,
      voteViewNamespace,
      detailViewNamespace]);
    app.config(['$httpProvider', function($httpProvider) {
      $httpProvider.defaults.withCredentials = true;
    }]);
    angular.bootstrap(document, ["main"]
    );
  });
