

'use strict';

var app = angular.module('App');
    app.controller('AuthController', function($scope, $auth, $state){

      if($auth.isAuthenticated())
        $state.go('user', {});
      $scope.login = function() {

          var credentials = {
              email: $scope.email,
              password: $scope.password
          }

          console.log(credentials);
          // Use Satellizer's $auth service to login
          $auth.login(credentials).then(function(data) {
              // If login is successful, redirect to the users state
              $state.go('user', {});
          });
      }
  

    });
