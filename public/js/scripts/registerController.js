

'use strict';

var app = angular.module('App');
    app.controller('RegisterController', function ($scope, $auth, $state) {

    //var vm = this;


    $scope.doregister = function() {

        var credentials = {
            email: $scope.email,
            password: $scope.password,
            name: $scope.name
        }

        // Use Satellizer's $auth service to login
        // $auth.login(credentials).then(function(data) {
        //
        //     // If signup is successful, redirect to the users state
        //     $state.go('user', {});
        // });
        $auth.signup(credentials)
        .then(function(response) {
          toastr.success('You have successfully created a new account and have been signed-in');

          $auth.setToken(response);
          $state.go('user', {});

        })
        .catch(function(response) {

          var error = response.data.error;
          for (var item in error) {
            var error_msg = '';
            var the_error = error[item];
            for(var lines in the_error){
              error_msg = error_msg+the_error[lines];
            }
            toastr.error(error_msg);
          }

        });
    }

});
