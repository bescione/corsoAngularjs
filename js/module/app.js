var app = angular.module('applicazione', ['ngRoute', 'ngCookies']);
app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl : 'partials/home.html',
			controller : 'MainCtrl'
		})
		.when('/:squadra', {
			templateUrl: 'partials/squadra.html',
			controller : 'SquadraCtrl'
		})
		.when('/:squadra/:partita', {
			templateUrl: 'partials/partita.html'
		})
		.otherwise({
			redirectTo : '/404'
		});
});

/*app.run(function ($rootScope, $location, $window, $cookies) {
    $rootScope.$on('$routeChangeStart', function () {
        if ($location.url() !== '/')
        {
            var n = $cookies.get('controllo');
            if(n == undefined || n == false || n.length < 3) {
               // controlla l'esistenza del cookie di controllo
                $location.url('/');
                var erroreLogin = "Non hai le credenziali per accedere alla pagina richiesta";
                $window.alert(erroreLogin);
            }
     
        }
    }
});*/
