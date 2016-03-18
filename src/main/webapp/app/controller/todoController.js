/**
 * Created by victor on 05/03/16.
 */
app.controller('todoCtrl', todoController);

function todoController($scope, $state, todoService) {

    $scope.newTodoModal = function() {
        $scope.todo = {};
        $('#createModal').modal('toggle');
    }

    $scope.updateTodoModal = function(index) {
        $scope.todoUpdate = $scope.todoList[index];
        $('#updateModal').modal('toggle');
    }

    $scope.save = function() {
        todoService.save($scope.todo, function(response, status) {
            if (status === 200) {
                $('#createModal').modal('toggle');
                $scope.listTodo();
            } else {
                console.log("Erro ao salvar to do");
            }
        });
    }

    $scope.update = function() {
        todoService.update($scope.todoUpdate, function(response, status) {
            if (status === 200) {
                $('#updateModal').modal('toggle');
                $scope.listTodo();
            } else {
                console.log("Erro ao atualizar to do");
            }
        });
    }

    $scope.delete = function(index) {
        todoService.delete($scope.todoList[index], function(response, status) {
            if (status === 200) {
                $scope.listTodo();
            } else {
                console.log("Erro ao deletar to do");
            }
        });
    }

    $scope.listTodo = function() {
        todoService.listTodo(function(response, status) {
            if (status === 200) {
                $scope.todoList = response;
            } else {
                console.log("To do list error");
            }
        });
    }

}