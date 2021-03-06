'use strict';

var navApp = angular.module('navApp',["ngRoute"]);

navApp.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: '_index.html',
  })
  .when('/about', {
    templateUrl: '_about.html',
  })
  .when('/contact', {
    templateUrl: '_contact.html',
  })
  .otherwise({redirectTo: '/'});
});


navApp.directive('fooNav', function(){
 return { templateUrl: "nav.html"};
});

navApp.controller('active', function($scope, $location){
  $scope.isActive = function (viewLocation) {
     var active = (viewLocation === $location.path());
     return active;
    };
});
