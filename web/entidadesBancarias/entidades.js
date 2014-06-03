app.controller("EntidadesEditController", function($scope, $routeParams, $http) {
    $scope.idEntidadBancaria = $routeParams.idEntidad;
    $http({method: 'GET', 
        url: 'http://localhost:8084/JuanjoBankServer/api/EntidadBancaria/'+$scope.idEntidadBancaria
    }).
            success(function(data, status, headers, config) {
        $scope.entidadBancaria = data;
    }).
            error(function(data, status, headers, config) {
        alert("no se han podido leer los datos");
    });
});
app.controller("EntidadesDeleteController", function($scope, $routeParams,$http) {
    $scope.idEntidadBancaria = $routeParams.idEntidadBancaria;
    var parametrosPeticion = {
        method: 'DELETE',
        url: 'http://localhost:8084/JuanjoBankServer/api/EntidadBancaria/'+$scope.idEntidadBancaria
       
    };
    var request = $http(parametrosPeticion);
    request.success(function(data,status,headers,config){
        alert("Se ha borrado la id :"+$scope.idEntidadBancaria );
    }).error(function(data,status,headers,config){
       $scope.data = data;
        alert("no se ha podido borrar la id "+$scope.idEntidadBancaria);
    });
});
app.controller("EntidadesListController", function($scope, $routeParams, $http) {
    var parametrosPeticion = {
        method: 'GET',
        url: 'http://localhost:8084/JuanjoBankServer/api/EntidadBancaria'
    };
    var request = $http(parametrosPeticion);
    request.success(function(data, status, headers, config) {
        $scope.entidades=data;
    });
    request.error(function(data, status, headers, config) {

    });

});
app.controller("EntidadesAddController", function($scope, $routeParams, $http) {
   
   $scope.add = function (){
       alert("he conseguido que se ejecute");
   };

});
