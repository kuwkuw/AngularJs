'use strict';

Posts.$inject = ['$resource', 'apiBase'];

function Posts($resource, apiBase) {
    var posts = $resource(apiBase + '/posts'),
        post = $resource(apiBase + '/posts/:id');
    return {
        getPosts: getPosts,
        getPost: getPost
    }

    function getPosts() {
        return posts.query().$promise;
    }

    function getPost(id) {
        return post.get({id: id}).$promise;
    }
}

module.exports = Posts;