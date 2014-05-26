app.controller("SucursalesEditController", function($scope, $routeParams, $http) {
    $scope.idSucursal = $routeParams.idSucursal;
    $http({method: 'GET', url: 'http://localhost:8084/juanjoBank/api/Usuario/5'}).
            success(function(data, status, headers, config) {
        $scope.sucursalesBancarias = data;
    }).
            error(function(data, status, headers, config) {
        alert("no se han podido leer los datos");
    });
});
app.controller("SucursalesListController", function($scope, $routeParams) {
    $scope.sucursales = [
        {
            nombre: "valencia",
            idSucursal: 3,
            codigo: "46"
        },
        {
            nombre: "Alicante",
            idSucursal: 7,
            codigo: "03"
        },
        {
            nombre: "Castellon",
            idSucursal: 89,
            codigo: "12"
        }
    ];

});
app.controller("SucursalesDeleteController", function($scope, $routeParams) {
    $scope.idSucursal = $routeParams.idSucursal;
});
app.controller("SucursalesAddController", function($scope, $routeParams, $http) {
    $scope.idSucursal = $routeParams.idSucursal;
    $http({method: 'GET', url: 'http://localhost:8084/juanjoBank/api/Usuario/5'}).
            success(function(data, status, headers, config) {
        $scope.sucursalesBancarias = data;
    }).
            error(function(data, status, headers, config) {
        alert("no se han podido leer los datos");
    });
});