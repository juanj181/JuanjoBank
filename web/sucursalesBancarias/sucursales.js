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
app.controller("SucursalesListController", function($scope, $routeParams, $http) {
    var parametrosPeticion = {
        method: 'GET',
        url: 'http://localhost:8084/JuanjoBankServer/api/SucursalBancaria'
    };
    var request = $http(parametrosPeticion);
    request.success(function(data, status, headers, config) {
        $scope.entidades=data;
    });
    request.error(function(data, status, headers, config) {

    });

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