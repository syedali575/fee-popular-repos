(function() {
    'use strict';

    angular.module('gh')
        .controller('UserReposController', UserReposController);

    UserReposController.$inject = ['GithubService'];
    function UserReposController(GithubService) {
        var vm = this;
        vm.list = [];
        vm.user = {};

        vm.lookup = function lookup(user) {
            GithubService.getRepos(user)
                .then(function setUsers(repos) {
                    console.log('repos', repos);
                    vm.list = repos;
                })
                .catch(function(err) {
                    console.error(err);
                });
        };
    }
})();
