var app = angular.module("StoryApp", []);

app.controller('helloCtrl', function($scope, $http){
    $http.get("hello.html").then(function(response){
        $scope.myHello = response.data;
    });
});