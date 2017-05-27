'use strict';

Users.$inject = ['$resource', 'apiBase'];

function Users($resource, apiBase) {
    var users = $resource(apiBase + '/users');
    return {
        getUsers: getUsers
    }

    function getUsers () {
        return users.query().$promise;
    }
}

module.exports = Users;