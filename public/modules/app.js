(function () {
    'use strict';

    angular.module('crudApp', [
        'ui.router',
        'sabio.crud?', 
        'sabio.layout', 
        'sabio.services'
]).config(RouteConfig)
        // .run(function ($rootScope, $document, $window) {
        //     debugger
        //     $rootScope.$on("$stateChangeError", console.log.bind(console));
        //     $rootScope.$on("$stateChangeSuccess", function () {
        //         $document[0].body.scrollTop = $document[0].documentElement.scrollTop = 0;
        //     });
        // });
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
//define model
// 'use strict';
////////define the app 
// $(function () {
//    // moment.js default language
//    // moment.locale('en')

//    angular.bootstrap(document, ['phoodieApp']);
// })();