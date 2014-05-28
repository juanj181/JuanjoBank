app.controller("MovimientosEditController", function($scope, $routeParams, $http) {
    $scope.idMovimiento = $routeParams.idMovimiento;
    $http({method: 'GET', url: 'http://localhost:8084/juanjoBank/api/Usuario/5'}).
            success(function(data, status, headers, config) {
        $scope.movimientosBancarios = data;
    }).
            error(function(data, status, headers, config) {
        alert("no se han podido leer los datos");
    });
});
app.controller("MovimientosListController", function($scope, $routeParams, $http) {
    var parametrosPeticion = {
        method: 'GET',
        url: 'http://localhost:8084/JuanjoBankServer/api/MovimientoBancario'
    };
    var request = $http(parametrosPeticion);
    request.success(function(data, status, headers, config) {
        $scope.entidades=data;
    });
    request.error(function(data, status, headers, config) {

    });

});
app.controller("MovimientosDeleteController", function($scope, $routeParams) {
    $scope.idMovimiento = $routeParams.idMovimiento;
});
app.controller("MovimientosAddController", function($scope, $routeParams, $http) {
    $scope.idMovimiento = $routeParams.idMovimiento;
    $http({method: 'GET', url: 'http://localhost:8084/juanjoBank/api/Usuario/5'}).
            success(function(data, status, headers, config) {
        $scope.movimientosBancarios = data;
    }).
            error(function(data, status, headers, config) {
        alert("no se han podido leer los datos");
    });
});