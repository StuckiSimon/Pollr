require(["login/namespace", "pollList/namespace", "login/module", "pollList/module"], function(loginNamespace, pollListNamespace) {
  angular.bootstrap(document, [loginNamespace, pollListNamespace]);
});
