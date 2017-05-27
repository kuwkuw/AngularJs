angular
    .module('app')
    .factory('albumsService', require('./albums'))
    .factory('commentsService', require('./comments'))
    .factory('postosService', require('./posts'))
    .factory('usersService', require('./users'));