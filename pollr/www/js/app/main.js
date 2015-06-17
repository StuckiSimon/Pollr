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
    angular.bootstrap(document, [
      loginNamespace,
      pollListNamespace,
      webServiceManagerNamespace,
      voteViewNamespace,
      detailViewNamespace]
    );
  });
