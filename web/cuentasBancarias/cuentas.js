app.controller("CuentasEditController", function($scope, $routeParams, $http) {
    $scope.idCuentaBancaria = $routeParams.idCuentaBancaria;

    $http({method: 'GET',
        url: 'http://localhost:8084/JuanjoBankServer/api/CuentaBancaria/' + $scope.idCuentaBancaria
    }).success(function(data, status, headers, config) {
        $scope.cuentaBancaria = data;
    }).error(function(data, status, headers, config) {
        alert("no se han podido leer los datos");
    });
    $scope.edit = function() {
        $http({
            method: 'PUT',
            url: 'http://localhost:8084/JuanjoBankServer/api/CuentaBancaria/' + $scope.idCuentaBancaria,
            data: $scope.cuentaBancaria
        }).success(function(data, status, headers, config) {
            $scope.cuentaBancaria = data;
            alert("datos actualizados");
        }).error(function(data, status, headers, config) {
            alert("no se han podido actualizar los datos");
        });
    };
});



app.controller("CuentasDeleteController", function($scope, $routeParams, $http) {
    $scope.idCuentaBancaria = $routeParams.idCuentaBancaria;
    var parametrosPeticion = {
        method: 'DELETE',
        url: 'http://localhost:8084/JuanjoBankServer/api/CuentaBancaria/' + $scope.idCuentaBancaria

    };
    var request = $http(parametrosPeticion);
    request.success(function(data, status, headers, config) {
        alert("Se ha borrado la id :" + $scope.idCuentaBancaria);
    }).error(function(data, status, headers, config) {
        $scope.data = data;
        alert("no se ha podido borrar la id " + $scope.idCuentaBancaria);
    });
});

app.controller("CuentasListController", function($scope, $routeParams, $http) {
    var parametrosPeticion = {
        method: 'GET',
        url: 'http://localhost:8084/JuanjoBankServer/api/CuentaBancaria'
    };
    var request = $http(parametrosPeticion);
    request.success(function(data, status, headers, config) {
        $scope.cuentas = data;
    });
    request.error(function(data, status, headers, config) {

    });

});

app.controller("CuentasAddController", function($scope, $routeParams, $http) {
    $scope.cuentaBancaria = {
        numeroCuenta: null,
        dc: null,
        saldo: null,
        cif: null
    };

    $scope.add = function() {
        //     alert("he conseguido que se ejecute");

        $http.post("http://localhost:8084/JuanjoBankServer/api/CuentaBancaria",
                $scope.cuentaBancaria)
                .success(function(data, status, headers, config) {
            $scope.cuentaBancaria = data;
            alert("se ha introducido correctamente la cuenta bancaria con ID:" + $scope.cuentaBancaria.idCuentaBancaria);
        }).error(function(data, status, headers, config) {
            $scope.status = status;
            alert("error al insertar");
        });
    };
});