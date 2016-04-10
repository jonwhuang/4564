var app = angular.module("4564", ["ng" ,"ngRoute", "chart.js"])

app.config(function($routeProvider){
  $routeProvider.
    when('/', {
      templateUrl: 'templates/index.html',
      controller: "chartCtrl"
    }).
    when('/chart', {
      templateUrl: 'templates/chart.html',
      controller: "chartCtrl"
    });
})