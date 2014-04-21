"use strict";

var app = angular.module('dabbble',['dabbble.controllers','dabbble.filters','dabbble.services']);

//define what route goes to what controller
app.config(function ($routeProvider) {
    
    //if hash url associate with the shotslist controller
    $routeProvider
            .when("/shots/:id", {controller:"ShotsCtrl", templateUrl:"partials/shot.html"    })
    .when("/:list", {controller:"ShotsListCtrl", templateUrl:"partials/shots_list.html"    })
            .otherwise ({redirectTo: "/popular"}); //we don't define a url because it's the everything else statement
    
});
