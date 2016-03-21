//Logic for page actions here. 

var controllers = angular.module('myBlogApp.controllers', []);

controllers.controller('BlogPostsController', ['$scope','blogFactory','$location', function($scope, blogFactory,$location) {
   //controls everything that happens on the blog-post-list page. 
        
        blogFactory.query(function(posts){
            $scope.posts = posts;
        });
       
        // var blogId = $routeParams.id;
        
        $scope.navigateToSingle = function(id) {
            console.log('here');
            $location.path('/posts/' + id);
            console.log(id);
        }
    

}]);

controllers.controller('NewPostController', ['$scope','blogFactory','$location', function($scope, blogFactory,$location){
//controls what happends on the create-new-post page. 
    var createBlog = {
        author: '',
        title: '',
        content: ''
    }
    
    $scope.createBlog = function(){
        blogFactory.save($scope.newBlog, function(boom){
            console.log(boom);
        });
    }   

    $scope.navigateToCompose = function(){
        $location.path('/blogposts')
    }
    
    // $scope.submitItAll = function(){
    //     createBlog();
    //     navigateToCompose();
    //     console.log('click!');
    // }
}]);

controllers.controller('SinglePostController', ['$scope','$routeParams','blogFactory',(function($scope,$routeParams,blogFactory){
    var postid = $routeParams.id;
    
    $scope.post = {
        title: '',
        author: '',
        content: '',
        createdAt: '',
        
    }
  
    blogFactory.get({id: postid}).$promise.then(function(post){
        $scope.post = post;
    }), function(err) {
        conosle.log('oops');
    }
})]);




// In-Class Demo Code (for reference only!)
// controllers.controller('PracticeController', ['$scope','idFactory', function($scope, idFactory){
//         var getPosts = function(){
//         FactoryName.query().$promise.then(function(success){
//             console.log(success);
//         }, function(err){
//             console.log('Oops!');
//             console.log(err);
//         })
//         }
//         $scope.getPosts() 
// }]);
// controllers.controller('ComposePostController', ['$scope','$location','PostFactory', function($scope,$location,PostFactory){
//     $scope.submitpost = function(){
//         var post = {
//             title: $scope.title,
//             author: $scope.author,
//             content: $scope.content
//         }
//         PostFactory.save(post).$promise.then(function(success){
//             $scope.posts = success
//         }, function(err){
//             console.log('oops');
//             console.log(err);
//         });
// }])

