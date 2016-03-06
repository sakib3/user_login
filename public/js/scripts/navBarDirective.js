'use restrict'
var app = angular.module('App');
    app.directive('navBar', function(){
        return{
          transclude:false,
          restrict:'E',
          scope:{
            data : '='
          },
          templateUrl: 'views/navBarTemplate.html',
          controller: function($scope){
            
          }

        };
    });
