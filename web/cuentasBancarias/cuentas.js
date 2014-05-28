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
app.controller("CuentasDeleteController", function($scope, $routeParams) {
    $scope.idCuenta = $routeParams.idCuenta;
});

app.controller("CuentasListController", function($scope, $routeParams, $http) {
    var parametrosPeticion = {
        method: 'GET',
        url: 'http://localhost:8084/JuanjoBankServer/api/CuentaBancaria'
    };
    var request = $http(parametrosPeticion);
    request.success(function(data, status, headers, config) {
        $scope.cuentas=data;
    });
    request.error(function(data, status, headers, config) {

    });
    
  });  

app.controller("CuentasAddController", function($scope, $routeParams, $http) {
    $scope.idCuenta = $routeParams.idCuenta;
    $http({method: 'GET', url: 'http://localhost:8084/juanjoBank/api/Usuario/5'}).success(function(data, status, headers, config) {
        $scope.cuentaBancaria = data;
    }).error(function(data, status, headers, config) {
        
    
    });
});