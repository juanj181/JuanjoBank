var app = angular.module("app", ['ngRoute']);
app.controller("IndexController", function($scope) {

});
//*********************CUENTAS************************
app.config(function($routeProvider) {
    $routeProvider.when('/cuentasBancarias/list',
            {
                templateUrl: 'cuentasBancarias/list.html',
                controller: "CuentasListController"
            }
    );
    $routeProvider.when('/cuentasBancarias/edit/:idCuentaBancaria',
            {
                templateUrl: 'cuentasBancarias/edit.html',
                controller: "CuentasEditController"
            }
    );
    $routeProvider.when('/cuentasBancarias/delete/:idCuentaBancaria',
            {
                templateUrl: 'cuentasBancarias/delete.html',
                controller: "CuentasDeleteController"
            }
    );
    $routeProvider.when('/cuentasBancarias/add',
            {
                templateUrl: 'cuentasBancarias/add.html',
                controller: "CuentasAddController"
            }
    );
    //*********************ENTIDADES************************
    $routeProvider.when('/entidadesBancarias/list',
            {
                templateUrl: 'entidadesBancarias/list.html',
                controller: "EntidadesListController"
            }
    );
    $routeProvider.when('/entidadesBancarias/edit/:idEntidadBancaria',
            {
                templateUrl: 'entidadesBancarias/edit.html',
                controller: "EntidadesEditController"
            }
    );
    $routeProvider.when('/entidadesBancarias/delete/:idEntidadBancaria',
            {
                templateUrl: 'entidadesBancarias/delete.html',
                controller: "EntidadesDeleteController"
            }
    );
    $routeProvider.when('/entidadesBancarias/add',
            {
                templateUrl: 'entidadesBancarias/add.html',
                controller: "EntidadesAddController"
            }
    );

    //*********************SUCURSALES************************
    $routeProvider.when('/sucursalesBancarias/list',
            {
                templateUrl: 'sucursalesBancarias/list.html',
                controller: "SucursalesListController"
            }
    );
    $routeProvider.when('/sucursalesBancarias/edit/:idSucursalBancaria',
            {
                templateUrl: 'sucursalesBancarias/edit.html',
                controller: "SucursalesEditController"
            }
    );
    $routeProvider.when('/sucursalesBancarias/delete/:idSucursalBancaria',
            {
                templateUrl: 'sucursalesBancarias/delete.html',
                controller: "SucursalesDeleteController"
            }
    );
    $routeProvider.when('/sucursalesBancarias/add',
            {
                templateUrl: 'sucursalesBancarias/add.html',
                controller: "SucursalesAddController"
            }
    );
    //*********************SUCURSALES************************
    $routeProvider.when('/movimientosBancarios/list',
            {
                templateUrl: 'movimientosBancarios/list.html',
                controller: "MovimientosListController"
            }
    );
            $routeProvider.when('/movimientosBancarios/edit/:idMovimientoBancario',
            {
                templateUrl: 'movimientosBancarios/edit.html',
                controller: "MovimientosEditController"
            }
    );
            $routeProvider.when('/movimientosBancarios/delete/:idMovimientoBancario',
            {
                templateUrl: 'movimientosBancarios/delete.html',
                controller: "MovimientosDeleteController"
            }
    );
            $routeProvider.when('/movimientosBancarios/add',
            {
                templateUrl: 'movimientosBancarios/add.html',
                controller: "MovimientosAddController"
            }
    );
            //*********************otherwise************************
    $routeProvider.otherwise(
            {
                redirectTo: '/entidadesBancarias/list'
            }
    );
});
