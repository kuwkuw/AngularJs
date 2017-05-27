'use strict';

PostController.$inject = ['postosService', '$stateParams'];

function PostController(postosService, $stateParams) {
    var vm = this;
    vm.post;

    postosService.getPost($stateParams.id).then(function(res){
        vm.post = res;
    })
}

module.exports = PostController;