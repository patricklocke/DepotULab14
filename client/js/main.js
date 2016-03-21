//Use to instantiate app, connect factory & controllers and configure app.

var app = angular.module('myBlogApp', ['myBlogApp.controllers', 'myBlogApp.factores','myBlogApp.services', 'ngRoute', 'ngResource']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'views/blogposts.html',
        controller:  'BlogPostsController',
        log: 'we here'
    })
    .when('/blogposts', {
        templateUrl: 'views/blogposts.html',
        controller: 'BlogPostsController',
        log: "blogposts"
    })
    .when('/newpost',{
        templateUrl: 'views/newpost.html',
        controller: 'NewPostController',
        log: "newpost"
    })
    .otherwise({
        redrectTo: '/'
    })
}]);