'use strict';

var angular = require('angular');

angular
    .module('app')
    .controller('mainController', require('./main.controller'))
    .controller('postsController', require('./posts.controller'))
    .controller('commentsController', require('./comments.controller'))
    .controller('albomsController', require('./alboms.controller'))
    .controller('usersController', require('./users.controller'));