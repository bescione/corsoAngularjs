app.directive('logo', ['$location', '$routeParams', function($location, $routeParams) {
	
	return {
      restrict: 'E',
      scope: {
      	customerImg : '=img'
      },
      link : function(scope, elem, attrs) {
        scope.dimensioni = attrs.grandezza;
      },
      template: '<img class="{{dimensioni}}" src="images/{{ customerImg }}.jpg">'
    /*templateUrl: 'partials/imageSquadra.html'*/
  };
}]);
