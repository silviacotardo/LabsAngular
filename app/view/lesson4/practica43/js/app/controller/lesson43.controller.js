app.controller("serviceExample", ["$scope", "multiplier",
function ($scope, multiplier) {
$scope.resultado =
multiplier.multiply(2);
}]);