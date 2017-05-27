'use strict';

Albums.$inject = ['$resource', 'apiBase'];

function Albums($resource, apiBase) {
    var albums = $resource(apiBase + '/albums'),
        albumPhotos = $resource(apiBase + '/albums/:albomId/photos');

    return {
        getAlbums: getAlbums,
        getAlbumPhotos: getAlbumPhotos
    }

    function getAlbums () {
        return albums.query().$promise;
    }

    function getAlbumPhotos (albomId) {
        return albumPhotos.query({albomId: albomId}).$promise;
    }

}

module.exports = Albums;