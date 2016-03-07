/**
 * Created by victor on 05/03/16.
 */

var app = angular.module("todoApp", [
    'ui.router'
]);

app.constant('context', "/");

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/app/home");

    $stateProvider
        .state('app', {
            url: '/app',
            templateUrl: '/views/template.html'
        })
        .state('app.home', {
            url: '/home',
            templateUrl: '/views/home.html'
        })
        .state('app.todo-list', {
            url: '/todo',
            templateUrl: '/views/todo/list.html'
        })
        .state('app.todo-add', {
            url: '/todo/add',
            templateUrl: '/views/todo/add.html'
        });

});