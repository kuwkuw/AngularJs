'use strict';

CommentsController.$inject = ['commentsService'];

function CommentsController(commentsService) {
    var vm = this;
    vm.comments = [];

    commentsService.getComments().then(function(res){
        vm.comments = res;
    });
}

module.exports = CommentsController;