function prod(myList){ 
    this.agregar = function(producto){myList.push(angular.copy(producto));}; 
    this.eliminar = function(itemID){myList.splice(itemID,1);};
    this.lista = function() { return myList; };
}

app.service('myService', prod);

app.value('myList', []);

