//The action to call the local API should be here

var app = angular.module('myBlogApp.factories', ['ngResource']);

    app.factory('blogFactory', ['$resource', function($resource) {
        
        return $resource('http://localhost:3000/api/posts',{
            'create': {method: 'POST'},
            'fetch': {method: 'GET'}
            });
    
    }]);


