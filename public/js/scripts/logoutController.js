

'use strict';

var app = angular.module('App');
    app.controller('LogoutController', function($scope, $auth, $location){

      //if (!$auth.isAuthenticated()) { return; }

      if (!$auth.isAuthenticated()) { return; }
      $auth.logout()
        .then(function() {
          toastr.info('You have been logged out');
          $location.path('/');
        });

    });
