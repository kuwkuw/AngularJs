'use strict';

AlbumPhotosController.$inject = ['albumsService', '$stateParams'];

function AlbumPhotosController(albumsService, $stateParams) {
    var vm = this;
    vm.albumPhotos = [];

    albumsService.getAlbumPhotos($stateParams.id).then(function (res) {
        vm.albumPhotos = res;
    })
}

module.exports = AlbumPhotosController;