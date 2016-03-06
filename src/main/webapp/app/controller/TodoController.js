/**
 * Created by victor on 05/03/16.
 */
app.controller('todoCtrl', TodoController);

function TodoController($scope, todoService) {

    $scope.listTodo = function() {
        todoService.listTodo(function(response, status) {
            if (status === 200) {
                $scope.todoList = response;
            } else {
                console.log("Todo list error");
            }
        });
    }

}