//Logic for page actions here. 

var controllers = angular.module('myBlogApp.controllers', []);

controllers.controller('BlogPostsController', ['$scope','blogFactory', function($scope, blogFactory){
   //controls everything that happens on the blog-post-list page. 
        blogFactory.query(function(posts){
            $scope.posts = posts;
   })
}]);

controllers.controller('NewPostController', ['$scope','blogFactory', function($scope, blogFactory){
//controls what happends on the create-new-post page. 
    $scope.createBlog = function(){
        blogFactory.save($scope.newBlog, function(boom){
            console.log(boom);
        });
    }    
}]);

// controllers.controller('PostDetailController', ['$scope','idFactory', function($scope, idFactory){
//         idFactory.query(function())
//      var detail = idFactory.get({ id:$routeParams.id });
     
// }]