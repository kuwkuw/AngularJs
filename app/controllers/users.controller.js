'use strict';

UsersController.$inject = ['usersService'];

function UsersController(usersService) {
    var vm = this;
    vm.title = 'Users'
    vm.users = [];


    usersService.getUsers().then(function (res) {
        console.log(res)
        vm.users = res;
    })

}

module.exports = UsersController;