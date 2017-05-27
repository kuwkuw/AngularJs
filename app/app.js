
angular
    .module('app', ['ui.router', 'ngResource', 'ngMessages'])
    .constant('apiBase', 'http://jsonplaceholder.typicode.com')
    .config(['$stateProvider', '$urlRouterProvider', '$httpProvider', '$provide', function ($stateProvider, $urlRouterProvider, $httpProvider, $provide) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('users', {
                url: '/',
                template: require('./views/users.html'),
                controller: 'usersController as usersCntl'
            })
            .state('user', {
                url: '/users/:id',
                template: require('./views/userInfo.html'),
                controller: 'userInfoController as userInfoCntl'
            })
            .state('albums', {
                url: '/albums',
                template: require('./views/albums.html'),
                controller: 'albumsController as albumsCntl'
            })
            .state('photos', {
                url: '/albums/:id',
                template: require('./views/albumPhotos.html'),
                controller: 'albumPhotosController as albumPhotosCntl'
            })
            .state('comments', {
                url: '/comments',
                template: require('./views/comments.html'),
                controller: 'commentsController as commentsCntl'
            })
            .state('posts', {
                url: '/posts',
                template: require('./views/posts.html'),
                controller: 'postsController as postsCntl'
            })
            .state('post', {
                url: '/posts/:id',
                template: require('./views/post.html'),
                controller: 'postController as postCntl'
            })
            ;

        var requestResponseEmiter = {
            onRequest: function (cb) {
                this.onRequestHandler = cb
            },
            onResponse: function (cb) {
                this.onResponseHandler = cb
            }
        }

        $provide.factory('requestResponseEmiter', function () {
            return requestResponseEmiter;
        })

        $httpProvider.interceptors.push(function () {
            return {
                'request': function (config) {
                    if (requestResponseEmiter.onRequestHandler) {
                        requestResponseEmiter.onRequestHandler();
                    }
                    return config
                },

                'response': function (response) {
                    if (requestResponseEmiter.onResponseHandler) {
                        requestResponseEmiter.onResponseHandler();
                    }
                    return response
                }
            };
        });


    }]);

require('./directives');
require('./services');
require('./controllers');
