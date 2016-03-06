/**
 * Created by victor on 05/03/16.
 */
app.service('todoService', TodoService);

function TodoService($http, context) {

    var base_path = context + 'todo';

    this.listTodo = function(callback) {
        $http.get(base_path + '/list')
            .success(function(data, status) {
                callback(data, status);
            })
            .error(function(data, status) {
                callback(data, status);
            });
    }

}