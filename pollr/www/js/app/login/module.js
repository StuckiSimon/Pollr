define(['login/namespace', 'login/controller/LoginController', 'login/config/setup'], function(namespace, loginController, setup) {
  var module = angular.module(namespace, ["ionic"]);
  loginController(module);
  setup(module);
});