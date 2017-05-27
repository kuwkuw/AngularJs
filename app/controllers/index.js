angular
    .module('app')
    .controller('mainController', require('./main'))
    .controller('postsController', require('./posts'))
    .controller('postController', require('./post'))
    .controller('commentsController', require('./comments'))
    .controller('albumsController', require('./albums'))
    .controller('usersController', require('./users'))
    .controller('userInfoController', require('./userInfo'))
    .controller('albumPhotosController', require('./albomPhotos'));