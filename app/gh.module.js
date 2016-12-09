(function() {
    'use strict';

    angular.module('gh', ['ui.router'])
        .config(ghConfig);

    ghConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function ghConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'repos/user-repos.template.html',
                controller: 'UserReposController',
                controllerAs: 'repos'
            });
    }

})();
