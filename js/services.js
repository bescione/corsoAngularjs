app.factory('dettagliSquadra', ['$http', '$location', '$routeParams', function($http, $location, $routeParams) {
	return {
		caricaDettagli : function(squadra) {
			return $http.get('model/' + squadra + '.json');
		}
	};
}]);

app.factory('partiteSquadra', ['$http', function($http) {
	return {
		elencoPartite : function(squadra) {
			return $http.get('model/partita-' + squadra + '.json');
		}
	};
}]);