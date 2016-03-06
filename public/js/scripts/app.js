
'use strict';
    var app = angular.module('App', ['ui.router', 'satellizer']);
        app.config(function($stateProvider, $urlRouterProvider, $authProvider) {

            // Satellizer configuration that specifies which API
            // route the JWT should be retrieved from
            $authProvider.loginUrl = '/api/authenticate';
            $authProvider.signupUrl = '/api/authenticate/create';

            // Redirect to the auth state if any other states
            // are requested other than users

            $stateProvider
                .state('auth', {
                    url: '/auth',
                    templateUrl: '../views/authView.html',
                    controller: 'AuthController as auth'
                })
                .state('user', {
                    url: '/user',
                    templateUrl: '../views/userView.html',
                    controller: 'UserController as user'
                })
                .state('register', {
                    url: '/register',
                    templateUrl: '../views/registerView.html',
                    controller: 'RegisterController as register'
                });
                $urlRouterProvider.otherwise('/auth');
        });
