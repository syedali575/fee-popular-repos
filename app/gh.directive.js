(function() {
  'use strict';

  angular.module('gh')
    .directive('detail', DetailDirective);

    <article class='panel panel-info'>
  <header class='panel-heading'>
    <!-- data (title) from using the directive -->
  </header>
  <section class='panel-body'>
    <!-- data (content) from using the directive -->
  </section>
</article>

  function DetailDirective() {

    return{
      templateUrl:'',
      restrict: 'A',
      scope: {
        something: '',
        panelClose: '&closeDetail'
      },

      transclude: true;


    };


  }


}());
