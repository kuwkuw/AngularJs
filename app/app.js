
angular
    .module('app', ['ui.router', 'ngResource'])
    .constant('apiBase', 'http://jsonplaceholder.typicode.com')
    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('users', {
                url: '/',
                template: require('./views/users.html'),
                controller: 'usersController as usersCntl'
            })
             .state('alboms', {
                 url: '/alboms',
                template: require('./views/alboms.html'),
                controller: 'usersController as albomsCntl'       
            })
             .state('comments', {
                 url: '/comments',
                template: require('./views/comments.html'),
                controller: 'usersController as commentsCntl'       
            })
            .state('posts', {
                 url: '/posts',
                template: require('./views/posts.html'),
                controller: 'usersController as postsCntl'       
            });

    });

require('./directives');
require('./services');
require('./controllers');