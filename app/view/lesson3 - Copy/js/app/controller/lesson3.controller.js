app.controller('miControler', ["myService", "myList", function(myService, myList) {

    var myScope = this;

    myScope.producto = {};

    myScope.contenedor =  [];
    
    myScope.agrega = function(producto){
        myService.agregar(producto);
    };

    myScope.elimina = function(itemID){
        myService.eliminar(itemID);
    }

    myScope.lista = function() {
        return myService.lista();
    }


}]);
