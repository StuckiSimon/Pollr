require([
  "login/namespace",
  "pollList/namespace",
  "voteView/namespace",
  "shared/webServiceManager/namespace",
  "../../lib/angularjs/localstorage",
  "login/module",
  "pollList/module",
  "voteView/module",
  "shared/webServiceManager/module"],
  function(loginNamespace, pollListNamespace, webServiceManagerNamespace, voteViewNamespace) {
    angular.bootstrap(document, [
      loginNamespace,
      pollListNamespace,
      webServiceManagerNamespace,
      voteViewNamespace]
    );
  });
