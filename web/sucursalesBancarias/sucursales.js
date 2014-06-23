app.controller("SucursalesEditController", function($scope, $routeParams, $http) {
    $scope.idSucursalBancaria = $routeParams.idSucursalBancaria;

    $http({method: 'GET',
        url: 'http://localhost:8084/JuanjoBankServer/api/SucursalBancaria/' + $scope.idSucursalBancaria
    }).success(function(data, status, headers, config) {
        $scope.sucursalBancaria = data;
    }).error(function(data, status, headers, config) {
        alert("no se han podido leer los datos");
    });
    $scope.edit = function() {
        $http({
            method: 'PUT',
            url: 'http://localhost:8084/JuanjoBankServer/api/SucursalBancaria/' + $scope.idSucursalBancaria,
            data: $scope.sucursalBancaria
        }).success(function(data, status, headers, config) {
            $scope.sucursalBancaria = data;
            alert("datos actualizados");
        }).error(function(data, status, headers, config) {
            alert("no se han podido actualizar los datos");
        });
    };
});

app.controller("SucursalesDeleteController", function($scope, $routeParams, $http) {
    $scope.idSucursalBancaria = $routeParams.idSucursalBancaria;
    var parametrosPeticion = {
        method: 'DELETE',
        url: 'http://localhost:8084/JuanjoBankServer/api/SucursalBancaria/' + $scope.idSucursalBancaria

    };
    var request = $http(parametrosPeticion);
    request.success(function(data, status, headers, config) {
        alert("Se ha borrado la id :" + $scope.idSucursalBancaria);
    }).error(function(data, status, headers, config) {
        $scope.data = data;
        alert("no se ha podido borrar la id " + $scope.idSucursalBancaria);
    });
});


app.controller("SucursalesListController", function($scope, $routeParams, $http) {
    var parametrosPeticion = {
        method: 'GET',
        url: 'http://localhost:8084/JuanjoBankServer/api/SucursalBancaria'
    };
    var request = $http(parametrosPeticion);
    request.success(function(data, status, headers, config) {
        $scope.sucursales = data;
    });
    request.error(function(data, status, headers, config) {

    });

});


app.controller("SucursalesAddController", function($scope, $routeParams, $http) {
    $scope.sucursalBancaria = {
        codigoSucursalBancaria: null,
        nombreSucursalBancaria: null,
        
    };

    $scope.add = function() {
        //     alert("he conseguido que se ejecute");

        $http.post("http://localhost:8084/JuanjoBankServer/api/SucursalBancaria",
                $scope.sucursalBancaria)
                .success(function(data, status, headers, config) {
            $scope.sucursalBancaria = data;
            alert("se ha introducido correctamente la sucursal Bancaria con ID:" + $scope.sucursalBancaria.idSucursalBancaria);
        }).error(function(data, status, headers, config) {
            $scope.status = status;
            alert("error al insertar");
        });
    };
});

