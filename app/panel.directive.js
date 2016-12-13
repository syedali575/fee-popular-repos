(function() {
  'use strict';

  angular.module('gh')
    .directive('panel', PanelDirective);



  function PanelDirective() {

    return{
      templateUrl:'/app/panel.template.html',
      restrict: 'A',
      scope: {
        repo: "=repodata"
      },

      transclude: true


    };


  }


}());
