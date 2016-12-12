(function() {
  'use strict';

  angular.module('gh')
  .filter('bypopularity', ByPopularity);

  function ByPopularity(){

    return function sortByPopularity(input) {
      var pop = input.map(function getpop(repo){
        var popularity = (repo.stargazers_count) + (repo.forks * 2) + (repo.open_issues/2);
        // console.log(popularity);
        return {
          name: repo.name,
          pop: popularity
        };
      });

      pop = pop.sort(function actualSort(a, b){
        if(a.pop > b.pop) {
          return -1;
        }
        else{
          return 1;
        }


      });
      console.log(pop);
      return pop;
    };

  }




}());
