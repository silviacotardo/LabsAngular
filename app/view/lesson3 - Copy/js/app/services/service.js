

/*function prod(){ 
    this.contenedor = [];
    this.agregar = function(producto){this.contenedor.push(angular.copy(producto));}; 
    this.eliminar = function(itemID){this.contenedor.splice(itemID,1);};
    this.lista = function() { return this.contenedor; };
}*/

function prod(myList){ 
    /*this.contenedor = [];*/
    this.agregar = function(producto){myList.push(angular.copy(producto));}; 
    this.eliminar = function(itemID){myList.splice(itemID,1);};
    this.lista = function() { return myList; };
}

app.service('myService', prod);

app.value('myList', []);



/*
myScope.agrega = function(producto) {
        myScope.contenedor.push( angular.copy(producto) );
    };

    myScope.elimina = function(itemID){
        myScope.contenedor.splice(itemID, 1);
    };*/