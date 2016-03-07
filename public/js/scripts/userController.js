'use strict';

    var app = angular.module('App');
        app.controller('UserController', function ($scope,$http,$state,$stateParams) {
          
          // This request will hit the index method in the AuthenticateController
          // on the Laravel side and will return the list of users
          $http.get('api/authenticate').success(function(data) {

              $scope.name = data.name;
              $scope.email = data.email;
              $scope.created_at = data.created_at;
              $scope.updated_at = data.updated_at;

              if($stateParams.notify)
              toastr.success('Logged In!');
            
          }).error(function(error) {
            // If user is not logged, redirect to the auth state
            $state.go('auth', {});

          });

    });
