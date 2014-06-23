app.controller("MovimientosEditController", function($scope, $routeParams, $http) {
    $scope.idMovimientoBancario = $routeParams.idMovimientoBancario;

    $http({method: 'GET',
        url: 'http://localhost:8084/JuanjoBankServer/api/MovimientoBancario/' + $scope.idMovimientoBancario
    }).success(function(data, status, headers, config) {
        $scope.movimientoBancario = data;
    }).error(function(data, status, headers, config) {
        alert("no se han podido leer los datos");
    });
    $scope.edit = function() {
        $http({
            method: 'PUT',
            url: 'http://localhost:8084/JuanjoBankServer/api/MovimientoBancario/' + $scope.idMovimientoBancario,
            data: $scope.movimientoBancario
        }).success(function(data, status, headers, config) {
            $scope.movimientoBancario = data;
            alert("datos actualizados");
        }).error(function(data, status, headers, config) {
            alert("no se han podido actualizar los datos");
        });
    };
});

app.controller("MovimientosDeleteController", function($scope, $routeParams, $http) {
    $scope.idMovimientoBancario = $routeParams.idMovimientoBancario;
    var parametrosPeticion = {
        method: 'DELETE',
        url: 'http://localhost:8084/JuanjoBankServer/api/MovimientoBancario/' + $scope.idMovimientoBancario

    };
    var request = $http(parametrosPeticion);
    request.success(function(data, status, headers, config) {
        alert("Se ha borrado la id :" + $scope.idMovimientoBancario);
    }).error(function(data, status, headers, config) {
        $scope.data = data;
        alert("no se ha podido borrar la id " + $scope.idMovimientoBancario);
    });
});


app.controller("MovimientosListController", function($scope, $routeParams, $http) {
    var parametrosPeticion = {
        method: 'GET',
        url: 'http://localhost:8084/JuanjoBankServer/api/MovimientoBancario'
    };
    var request = $http(parametrosPeticion);
    request.success(function(data, status, headers, config) {
        $scope.movimientos = data;
    });
    request.error(function(data, status, headers, config) {

    });

});


app.controller("MovimientosAddController", function($scope, $routeParams, $http) {
    $scope.movimientoBancario = {
        tipoMovimientoBancario: null,
        importe: null,
        fecha: null,
        saldoTotal: null,
        concepto: null
    };

    $scope.add = function() {

        $http.post("http://localhost:8084/JuanjoBankServer/api/MovimientoBancario",
                $scope.movimientoBancario)
                .success(function(data, status, headers, config) {
            $scope.movimientoBancario = data;
            alert("se ha introducido correctamente el movimiento Bancario con ID:" + $scope.movimientoBancario.idMovimientoBancario);
        }).error(function(data, status, headers, config) {
            $scope.status = status;
            alert("error al insertar");
        });
    };
});