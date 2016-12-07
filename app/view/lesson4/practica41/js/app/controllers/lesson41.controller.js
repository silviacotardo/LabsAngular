angular.module('demo', [])
.controller('Hello',function($scope, $http){
    $http.get('http://rest-service.guides.spring.io/greeting').
    then(function(response){
        $scope.mensaje = response.data.content;
        alert($scope.mensaje);
    });
});


/*app.controller("valueExample", ["$scope", "mensaje",
function($scope, mensaje){
    $scope.mensaje = mensaje;
}]);*/