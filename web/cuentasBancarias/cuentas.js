app.controller("CuentasEditController", function($scope, $routeParams, $http) {
    $scope.idCuenta = $routeParams.idCuenta;
    $http({method: 'GET', url: 'http://localhost:8084/juanjoBank/api/Usuario/5'}).
            success(function(data, status, headers, config) {
        $scope.cuentaBancaria = data;
    }).
            error(function(data, status, headers, config) {
        alert("no se han podido leer los datos");
    });
});
app.controller("CuentasListController", function($scope, $routeParams) {
    $scope.cuentas = [
        {
            nombre: "valencia",
            idCuenta: 01,
            codigo: "46"
        },
        {
            nombre: "Alicante",
            idCuenta: 02,
            codigo: "03"
        },
        {
            nombre: "Castellon",
            idCuenta: 03,
            codigo: "12"
        }
    ];
});
app.controller("CuentasDeleteController", function($scope, $routeParams) {
    $scope.idCuenta = $routeParams.idProvincia;
});
app.controller("CuentasAddController", function($scope, $routeParams, $http) {
    $scope.idCuenta = $routeParams.idCuenta;
    $http({method: 'GET', url: 'http://localhost:8084/juanjoBank/api/Usuario/5'}).
            success(function(data, status, headers, config) {
        $scope.cuentaBancaria = data;
    }).
            error(function(data, status, headers, config) {
        alert("no se han podido leer los datos");
    });
});