'use strict';


// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/home', {templateUrl: 'partials/home/home.html', controller: 'HomeCtrl'});
        $routeProvider.when('/dashboard', {templateUrl: 'partials/dashboard/dashboard.html', controller: 'DashboardCtrl'});
        $routeProvider.otherwise({redirectTo: '/home'});
    }]);