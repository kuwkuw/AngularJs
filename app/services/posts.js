'use strict';

Posts.$inject = ['$resource', 'apiBase'];

function Posts($resource, apiBase) {
    var posts = $resource(apiBase + '/posts');
    return {
        getPosts: getPosts
    }

    function getPosts () {
        return posts.query().$promise;
    }
}

module.exports = Posts;