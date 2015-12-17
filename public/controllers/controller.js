function AppCtrl($scope, $http) {
	console.log("Hello World from Controller");

	var refresh = function() {
		$http.get('/contactlist').success(function(response) {
			console.log("I got the data I requested");
			$scope.contactlist = response;
			$scope.contact = "";
		});
	};

	refresh();

	$scope.addContact = function() {
		console.log($scope.contact);
		$http.post('/contactlist', $scope.contact).success(function(response) {
			console.log(response);
			refresh();
		});
	};

	$scope.deleteContact = function(id) {
		console.log(id);
		$http.delete('/contactlist/' + id).success(function(response) {
			refresh();
		});
	};

	$scope.editContact = function(id) {
		//console.log(id);
		$http.get('/contactlist/' + id).success(function(response) {
			$scope.contact = response; 
		});
	};

}