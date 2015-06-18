require([
  "login/namespace",
  "pollList/namespace",
  "voteView/namespace",
  "detailView/namespace",
  "addPollView/namespace",
  "shared/webServiceManager/namespace",
  "login/module",
  "pollList/module",
  "voteView/module",
  "detailView/module",
  "addPollView/module",
  "shared/webServiceManager/module",
  "../../lib/angularjs/localstorage"],
  function(loginNamespace, pollListNamespace, webServiceManagerNamespace, voteViewNamespace, detailViewNamespace, addPollViewNamespace) {
    var app = angular.module("main", ["ionic", loginNamespace,
      pollListNamespace,
      webServiceManagerNamespace,
      voteViewNamespace,
      detailViewNamespace,
      addPollViewNamespace]);
    app.config(['$httpProvider', function($httpProvider) {
      $httpProvider.defaults.withCredentials = true;
    }]);
    angular.bootstrap(document, ["main"]
    );
  });
