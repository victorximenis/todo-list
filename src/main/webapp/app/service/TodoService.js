/**
 * Created by victor on 05/03/16.
 */
app.service('todoService', TodoService);

function TodoService($http, context) {

    var base_path = context + 'todo';

    this.save = function(todo, callback) {
        $http.post(base_path, todo)
            .success(function(data, status) {
                callback(data, status);
            })
            .error(function(data, status) {
                callback(data, status);
            });
    }

    this.update = function(todo, callback) {
        $http.post(base_path + '/update', todo)
            .success(function(data, status) {
                callback(data, status);
            })
            .error(function(data, status) {
                callback(data, status);
            });
    }

    this.listTodo = function(callback) {
        $http.get(base_path)
            .success(function(data, status) {
                callback(data, status);
            })
            .error(function(data, status) {
                callback(data, status);
            });
    }

    this.delete = function(todo, callback) {
        $http.post(base_path + "/delete", todo)
            .success(function(data, status) {
                callback(data, status);
            })
            .error(function(data, status) {
                callback(data, status);
            });
    }

}