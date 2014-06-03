app.controller("CuentasEditController", function($scope, $routeParams, $http) {
    $scope.idCuenta = $routeParams.idCuenta;
    $http({method: 'GET', url: 'http://localhost:8084/JuanjoBankServer/api/CuentaBancaria'}).
            success(function(data, status, headers, config) {
        $scope.cuentaBancaria = data;
    }).
            error(function(data, status, headers, config) {
        alert("no se han podido leer los datos");
    });
});
app.controller("CuentasDeleteController", function($scope, $routeParams,$http) {
    $scope.idCuentaBancaria = $routeParams.idCuentaBancaria;
    var parametrosPeticion = {
        method: 'DELETE',
        url: 'http://localhost:8084/JuanjoBankServer/api/CuentaBancaria/'+$scope.idCuentaBancaria
       
    };
    var request = $http(parametrosPeticion);
    request.success(function(data,status,headers,config){
        alert("Se ha borrado la id :"+$scope.idCuentaBancaria );
    }).error(function(data,status,headers,config){
       $scope.data = data;
        alert("no se ha podido borrar la id "+$scope.idCuentaBancaria);
    });
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
    $http({method: 'POST', url: 'http://localhost:8084/JuanjoBankServer/api/CuentaBancaria'}).success(function(data, status, headers, config) {
        $scope.cuentaBancaria = data;
    }).error(function(data, status, headers, config) {
        
    
    });
});