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


myNinjaApp.controller('NinjaController', ['$scope', function($scope){
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
        $scope.ninjas = [
            {
            name: 'Honda',
            color: 'Red',
            price: 19000,
            available: true,
            thumb: "content/img/homer.jpg"
            },
            {name: 'Toyota',
            color: 'Black',
            price: 18000,
            available: true,
            thumb: "content/img/marge.jpg"
            },
            {name: 'Subaru',
            color: 'Blue',
            price: 22000,
            available: true,
            thumb: "content/img/bart.jpg"
            },
            {name: 'Nissan',
            color: 'Orange',
            price: 25000,
            available: true,
            thumb: "content/img/lisa.jpg"
            },
        ];
}]);
