(function () {
    angular.module('crudApp', ['ui.router']).config(RouteConfig);
    RouteConfig.$inject = ['$stateProvider'];

    function RouteConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app.home', {
                url:'/home',
                views: {
                    'content@app': {
                        templateUrl: '/public/modules/home/home.html'
                    }
                }
            })
    }
})();