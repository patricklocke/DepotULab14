//Use to instantiate app, connect factory & controllers and configure app.

var app = angular.module('myBlogApp', ['myBlogApp.controllers', 'myBlogApp.factories', 'ngRoute', 'ngResource']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'views/blogposts.html',
        controller:  'BlogPostsController',
        
    })
    .when('/blogposts', {
        templateUrl: 'views/blogposts.html',
        controller: 'BlogPostsController',
        
    })
    .when('/newpost',{
        templateUrl: 'views/newpost.html',
        controller: 'NewPostController',
        
    })
    .when('/posts/:id',{
        templateUrl: 'views/detail.html',
        controller: 'SinglePostController'
    })
    .otherwise({
        redirectTo: '/'
    })
}]);