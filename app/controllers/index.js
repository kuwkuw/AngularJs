angular
    .module('app')
    .controller('mainController', require('./main.controller'))
    .controller('postsController', require('./posts.controller'))
    .controller('commentsController', require('./comments.controller'))
    .controller('albumsController', require('./albums.controller'))
    .controller('usersController', require('./users.controller'));