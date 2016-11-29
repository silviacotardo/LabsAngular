var app = angular.module('lesson3list', []);
app.controller('miControler', function() {

    var myScope = this;

   /* $scope.producto = {};
    $scope.producto.nombre = 'Hola';

    $scope.contenedor =  [];
    
    $scope.agrega = function(producto) {
        $scope.contenedor.push( angular.copy(producto) );
    };*/

    myScope.producto = {};
    myScope.producto.nombre = 'Hola';

    myScope.contenedor =  [];
    
    myScope.agrega = function(producto) {
        myScope.contenedor.push( angular.copy(producto) );
    };

    myScope.elimina = function(itemID){
        myScope.contenedor.splice(itemID, 1);
    };

});



