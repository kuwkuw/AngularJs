'use strict';

UsersInfoController.$inject = ['usersService', '$stateParams'];

function UsersInfoController(usersService, $stateParams) {
    var vm = this;
    vm.title = 'Users'
    vm.user;

    usersService.getUserInfo($stateParams.id).then(function (res) {
        vm.user = res;
    })

    vm.submit = function(form){
        vm.user.$save();
    }

}

module.exports = UsersInfoController;