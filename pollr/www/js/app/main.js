/**
 * main entry point for app, loads all direct dependencies and initializes app using bootstrap
 */
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
  "shared/pollValidator/module",
  "../../lib/angularjs/localstorage",
  "../../lib/angularjs/angles",
  "../../lib/chartjs/chart"],
  function(loginNamespace, pollListNamespace, voteViewNamespace, detailViewNamespace, addPollViewNamespace, webServiceManagerNamespace, historyHandlerNamespace) {
    // define module
    angular.module("main", ["ionic", loginNamespace,
      pollListNamespace,
      voteViewNamespace,
      detailViewNamespace,
      addPollViewNamespace,
      webServiceManagerNamespace,
      historyHandlerNamespace]);
    //bootstrap
    angular.bootstrap(document, ["main"]
    );
  });
