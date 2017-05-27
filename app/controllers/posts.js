'use strict';

PostsController.$inject = ['postosService'];

function PostsController(postosService) {
    var vm = this;
    vm.posts = [];

    postosService.getPosts().then(function(res){
        vm.posts = res;
    })
}

module.exports = PostsController;