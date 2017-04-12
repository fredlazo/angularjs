var myNinjaApp = angular.module('myNinjaApp', ['ngRoute']);

myNinjaApp.config(['$routeProvider', function($routeProvider){

    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html'
        })
        .when('/directory', {
            templateUrl: 'views/directory.html',
            controller: 'NinjaController'
        }).otherwise({
            redirectTo: '/home'
        });
}]);


myNinjaApp.controller('NinjaController', ['$scope', '$http', function($scope, $http){
        $scope.removeNinja = function(ninja){
            var removedNinja = $scope.ninjas.indexOf(ninja);
            $scope.ninjas.splice(removedNinja,1);
        };
        $scope.addCar = function(){
            $scope.ninjas.push({
                name: $scope.newcar.name,
                color: $scope.newcar.color,
                price: parseInt($scope.newcar.price),
                available: true
            });

        $scope.newcar = {};
        //$scope.newcar.name = "";
        //$scope.newcar.color = "";
        //$scope.newcar.price = "";

        };


//.success is deprecated.  use .then
        $http.get('data/ninjas.json').then(function(response){
            $scope.ninjas = response.data;
        });


        /*
        $http.get('./data/ninjas.json').success(function(data){
            $scope.ninjas = data;
        });
        */

}]);
