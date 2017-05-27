'use strict';

MainController.$inject = [];

function MainController(gh) {
    var vm = this;
    vm.links = ['users', 'albums', 'posts', 'comments'];
}

module.exports = MainController;