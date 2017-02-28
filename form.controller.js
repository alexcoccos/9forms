angular.module('app').controller('FormCtrl', function ($scope) {

	$scope.listaUtenti = [];

	$scope.inserisci = function (user, form) {
		$scope.listaUtenti.push(user);
		$scope.user = {};
		$scope.myform.$setPristine();
	}

});