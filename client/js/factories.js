//The action to call the local API should be here

var app = angular.module('myBlogApp.factories', ['$resource']);
app.factory('blogFactory', ['$resource', function($resource) {
    return $resource('localhost:3000/api/posts', {
        'update': {method: 'POST'},
        'retrieve': {method: 'GET'}
    }); 
}]);


