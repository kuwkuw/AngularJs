'use strict';

UsersService.$inject = ['$resource', 'apiBase'];

function UsersService($resource, apiBase) {
    var users = $resource(apiBase + '/users');
    return {
        getUsers: getUsers
    }

    function getUsers () {
        return users.query().$promise;
    }
}

module.exports = UsersService;