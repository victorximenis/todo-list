/**
 * Created by victor on 05/03/16.
 */
app.controller('todoCtrl', TodoController);

function TodoController($scope, $state, todoService) {

    $scope.openModal = function() {
        $scope.todo = {};
        $('#modal').modal('toggle');
    }

    $scope.save = function() {
        todoService.save($scope.todo, function(response, status) {
            if (status === 200) {
                $('#modal').modal('toggle');
                $scope.listTodo();
            } else {
                console.log("Erro ao salvar Todo");
            }
        });
    }

    $scope.delete = function(index) {
        todoService.delete($scope.todoList[index], function(response, status) {
            if (status === 200) {
                $scope.listTodo();
            } else {
                console.log("Erro ao deletar todo");
            }
        });
    }

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