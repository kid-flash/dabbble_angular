'use strict';

var filters = angular.module('dabbble.filters',[]);

filters.filter('dabbbleDate', function ($filter) { //passing $filter allows us to access defualt Angular filter
    
    //return the filter
    return function (value, format) { //filters always have at least the 'value' argument
        
        if (value) {
            value = Date.parse(value);
        }
        
        //pass parsed data back to the default date filter
        return $filter('date')(value, format);
    };
});