// Controller dell'homepage
app.controller('MainCtrl', ['$scope', '$cookies', function($scope, $cookies) {
	$scope.squadre = ["Juve", "Roma", "Sassuolo"];
	//$scope.squadre = ["1", "2", "3", "4", "5", "6"];

	$scope.loginUtente = function(username, password) {
		/*$cookies.putObject('controllo', {
			usr : username,
			pwd : password
		});*/
		$cookies.put('controllo', username+password);
	};

}]);

// Controller per la singola squadra
app.controller('SquadraCtrl', ['$scope', '$routeParams', '$route', '$timeout', '$location', 'dettagliSquadra', 'partiteSquadra', function($scope, $routeParams, $route, $timeout, $location, dettagliSquadra, partiteSquadra) {

	$scope.squadra = $routeParams.squadra;
	/*switch($scope.idSquadra) {
		case '1' :
			$scope.nomeSquadra = "Juventus";
		break;
	}*/

	$scope.percorso = $location.url();

	/*$timeout(function() {
        $route.reload();
    }, 10000);*/

	dettagliSquadra.caricaDettagli($scope.squadra).then(function(response) {
		$scope.dettagli = response.data;
	}, function(error) {
		$scope.dettagli = '';
		$scope.errore = "Impossibile caricare le informazioni sulla squadra";
	});

	partiteSquadra.elencoPartite($scope.squadra).then(function(response) {
		$scope.partite = response.data;
	}, function(error) {
		$scope.errore = "Non ci sono partite per questa squadra";
	})
}]);