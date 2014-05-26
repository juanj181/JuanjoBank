app.controller("EntidadesEditController", function($scope, $routeParams, $http) {
    $scope.idEntidad = $routeParams.idEntidad;
    $http({method: 'GET', url: 'http://localhost:8084/juanjoBank/api/Usuario/5'}).
            success(function(data, status, headers, config) {
        $scope.entidadBancaria = data;
    }).
            error(function(data, status, headers, config) {
        alert("no se han podido leer los datos");
    });
});
app.controller("EntidadesDeleteController", function($scope, $routeParams) {
    $scope.idEntidad = $routeParams.idEntidad;
});
app.controller("EntidadesListController", function($scope, $routeParams, $http) {
    var parametrosPeticion = {
        method: 'GET',
        url: 'http://localhost:8084/JuanjoBankServer/api/EntidadBancaria'
    }
    var request = $http(parametrosPeticion);
    request.success(function(data, status, headers, config) {
        $scope.entidades=data;
    });
    request.error(function(data, status, headers, config) {

    });


});
app.controller("EntidadesAddController", function($scope, $routeParams, $http) {
    $scope.idEntidad = $routeParams.idEntidad;
    $http({method: 'GET', url: 'http://localhost:8084/juanjoBank/api/Usuario/5'}).success(function(data, status, headers, config) {
        
    }).error(function(data, status, headers, config) {
        
    });
});
