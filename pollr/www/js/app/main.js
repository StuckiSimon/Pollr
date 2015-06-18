require([
  "login/namespace",
  "pollList/namespace",
  "voteView/namespace",
  "detailView/namespace",
  "addPollView/namespace",
  "shared/webServiceManager/namespace",
  "shared/historyHandler/namespace",
  "login/module",
  "pollList/module",
  "voteView/module",
  "detailView/module",
  "addPollView/module",
  "shared/webServiceManager/module",
  "shared/historyHandler/module",
  "../../lib/angularjs/localstorage"],
  function(loginNamespace, pollListNamespace, voteViewNamespace, detailViewNamespace, addPollViewNamespace, webServiceManagerNamespace, historyHandlerNamespace) {
    var app = angular.module("main", ["ionic", loginNamespace,
      pollListNamespace,
      voteViewNamespace,
      detailViewNamespace,
      addPollViewNamespace,
      webServiceManagerNamespace,
      historyHandlerNamespace]);
    app.config(['$httpProvider', function($httpProvider) {
      $httpProvider.defaults.withCredentials = true;
    }]);
    angular.bootstrap(document, ["main"]
    );
  });
