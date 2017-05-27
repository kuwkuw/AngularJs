'use strict';

Comments.$inject = ['$resource', 'apiBase'];

function Comments($resource, apiBase) {
    var comments = $resource(apiBase + '/comments');
    return {
        getComments: getComments
    }

    function getComments () {
        return comments.query().$promise;
    }
}

module.exports = Comments;