(function () {
    'use strict';

    angular.module('crudApp', [
        'ui.router',
        'laura.home',
        'sabio.crud', 
        'sabio.layout', 
        'sabio.services'
]).config(RouteConfig)
 
    RouteConfig.$inject = [
        "$stateProvider",
        "$urlRouterProvider",
        "$locationProvider"
    ];

    function RouteConfig($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise("/");
        $locationProvider.html5Mode(true);
    } //put stuff inside there from other file
    //main.js (green project) - bootstrap

})();
