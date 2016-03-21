//Logic for page actions here. 

var controllers = angular.module('myBlogApp.controllers', []);

controllers.controller('BlogPostsController', ['$scope','$http','blogFactory', function($scope, $http, blogFactory){
   //controls everything that happens on the blog-post-list page. 
   blogFactory.query(function(posts){
       $scope.posts = posts;
   })
    
}]);

controllers.controller('NewPostController', ['$scope','$http','blogFactory', function($scope, $http, blogFactory){
//controls what happends on the create-new-post page. 
    $scope.createBlog = function(){
        blogFactory.save($scope.newBlog, function(boom){
            console.log(boom);
        });
    }
      
}]);

