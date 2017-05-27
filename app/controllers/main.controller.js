'use strict';

MainController.$inject = [];

function MainController(gh) {
    var vm = this;
    vm.links = ['users', 'alboms', 'posts', 'comments'];
}

module.exports = MainController;