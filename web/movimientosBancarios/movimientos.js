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
app.controller("MovimientosListController",function($scope,$routeParams) {
    $scope.movimientos=[
        {
            nombre:"valencia",
            idMovimiento:10,
            codigo:"46"
        },
        {
            nombre:"Alicante",
            idMovimiento:11,
            codigo:"03"
        },
        {
            nombre:"Castellon",
            idMovimiento:12,
            codigo:"12"
        }
    ]; 
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