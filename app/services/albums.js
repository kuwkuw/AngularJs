'use strict';

Albums.$inject = ['$resource', 'apiBase'];

function Albums($resource, apiBase) {
    var albums = $resource(apiBase + '/albums');
    return {
        getAlbums: getAlbums
    }

    function getAlbums () {
        return albums.query().$promise;
    }
}

module.exports = Albums;