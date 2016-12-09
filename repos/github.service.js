(function() {
    'use strict';

    angular.module('gh')
        .factory('GithubService', GithubService);

    GithubService.$inject = ['$http', '$q'];
    function GithubService($http, $q) {
        var _token = localStorage.getItem('gh-token') || null;

        return {
            setUserToken: setUserToken,
            getUserToken: getUserToken,
            getRepos: getRepos
        };

        function setUserToken(token) {
            _token = token;
            localStorage.setItem('gh-token', token);
        }

        function getUserToken() {
            return _token;
        }

        function getRepos(user) {
            if (!_token) {
                console.warn('no token!');
                return $q.reject('Please enter your token first');
            }

            if (!user) {
                console.warn('no username!');
                return $q.reject('Please enter the desired username to look for.');
            }

            return $http({
                url: 'https://api.github.com/users/' + user + '/repos',
                headers: {
                    Authorization: 'token ' + _token
                }
            }).then(function cullAuthorData(response) {
                console.log(response);
                return response.data;
            });
        }
    }

})();
