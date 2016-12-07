

function prod(myList){ 
    this.agregar = function(producto){myList.push(angular.copy(producto));}; 
    this.eliminar = function(itemID){myList.splice(itemID,1);};
    this.lista = function() { return myList; };
}

app.service('myService', prod);

app.value('myList', []);



app.constant('url', 'http://localhost:3333/api/Ventas');

app.service('myRest', function(url){
    this.normal = function(){
        return url;
    };
    this.conParam = function(id){
        return url + '/' + id;
    }
});

app.value('productos', []);

app.service('consultaVenta',['productos', 'myRest', '$http', '$q'], function(productos, myRest, $http, $q){
    var consulta = this;

    consulta.lista = function(){
        var deferred = $q.defer();
    
        if(productos.length != 0){
            deferred.resolve(productos);
        }
        else{
            
                $http.get(myRest.normal())
                .success(function(data, status, headers, config){
                    if(data.success){
                        data.ventas.forEach(function(elem){
                            productos.push(elem);
                        });
                        deferred.resolve(productos);
                    }
                })
                .error(deferred.reject);
        }
    return deferred.promise;
    }
});