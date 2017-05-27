'use strict';

AlbumsController.$inject = ['albumsService'];

function AlbumsController(albumsService) {
    var vm = this;
    vm.albums = [];

    albumsService.getAlbums().then(function (res) {
        vm.albums = res;
    })
}

module.exports = AlbumsController;