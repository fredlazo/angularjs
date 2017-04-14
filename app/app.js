var myNinjaApp = angular.module('myNinjaApp', ['ngRoute', 'ngAnimate']);

myNinjaApp.config(['$routeProvider',  function($routeProvider){

    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'NinjaController'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'ContactController'
        })
        .when('/contact-success', {
            templateUrl: 'views/contact-success.html',
            controller: 'ContactController'
        })
        .when('/directory', {
            templateUrl: 'views/directory.html',
            controller: 'NinjaController'
        }).otherwise({
            redirectTo: '/home'
        });
}]);

myNinjaApp.directive('randomNinja', [function(){
    return {
        restrict: 'E',
        scope: {
            ninjas: '=',
            title: '='
        },
        templateUrl: 'views/random.html',
        transclude: true,
        replace: true,
        controller: function($scope){
            $scope.random = Math.floor(Math.random() * 4);
        }
    };
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

$scope.removeAll= function(){
    $scope.ninjas = [];
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

myNinjaApp.controller('ContactController', ['$scope', '$location', function($scope, $location){
    $scope.sendMessage = function(){
            $location.path('/contact-success');

    };
}]);
