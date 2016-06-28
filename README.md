# AngularNavigationActiveTest
Testing Navigation class="active" with controllers and directives.

#Solution
**in Navigation partial:**
`<nav id='nav' ng-controller="active">
    <ul>
      <li><a ng-class="{ active: isActive('/') }" href="#/">Home</a></li>
      <li><a ng-class="{ active: isActive('/about') }" href="#/about">About</a></li>
      <li><a ng-class="{ active: isActive('/contact') }" href="#/contact">Contact</a></li>
    </ul>
  </nav>
`


**Controller**
- var navApp = angular.module('navApp',["ngRoute"]);

`  navApp.controller('active', function($scope, $location){
    $scope.isActive = function (viewLocation) {
       var active = (viewLocation === $location.path());
       return active;
      };
  });
`

**CSS**
`.active{ insert styles here };`
