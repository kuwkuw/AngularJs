'use strict';

Users.$inject = ['$resource', 'apiBase'];

function Users($resource, apiBase) {
    var users = $resource(apiBase + '/users'),
        user = $resource(apiBase + '/users/:id');
    return {
        getUsers: getUsers,
        getUserInfo: getUserInfo
    }

    function getUsers() {
        return users.query().$promise;
    }

    function getUserInfo(id) {
        return user.get({ id: id }).$promise;
    }
}

module.exports = Users;