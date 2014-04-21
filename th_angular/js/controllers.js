'use strict';

//namespace the controllers
var controllers = angular.module('dabbble.controllers',[]);

controllers.controller('AppCtrl', function($scope){
    $scope.name = "Module";
});


//handles list
controllers.controller('ShotsListCtrl', function($scope, $routeParams, dribbble){
    
    var list = $routeParams.list;
    
    dribbble.list(list).then(function (data) {
        $scope.list = data.data;
        console.log(data);
    });
    
    $scope.loadNextPage = function () {
        dribbble.list(list, {page: $scope.list.page + 1}).then( function (data){
            console.log(data);
            $scope.list.page = data.data.page;
            $scope.list.shots = $scope.list.shots.concat(data.data.shots);
        });
    };
});

//cotnroller to handle dynamic shot links
controllers.controller('ShotsCtrl', function($scope, $routeParams, dribbble){
       
    var id = $routeParams.id;
    
    dribbble.shot(id).then(function (data) {
        $scope.shot = data.data;
        console.log(data);
    });
    
});
