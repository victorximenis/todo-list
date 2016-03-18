/**
 * Created by victor on 05/03/16.
 */
app.controller('todoCtrl', todoController);

function todoController($scope, Todo) {

    $scope.newTodoModal = function() {
        $scope.newTodo = new Todo();
        $('#createModal').modal('toggle');
    }

    $scope.updateTodoModal = function(index) {
        $scope.todoUpdate = Todo.get({id: $scope.todoList[index].id});
        $('#updateModal').modal('toggle');
    }

    $scope.save = function() {
        $scope.newTodo.$save(function() {
            $('#createModal').modal('toggle');
            $scope.listTodo();
        });
    }

    $scope.update = function() {
        $scope.todoUpdate.$update(function() {
            $('#updateModal').modal('toggle');
            $scope.listTodo();
        });
    }

    $scope.delete = function(index) {
        $scope.entry = Todo.get({id: $scope.todoList[index].id}, function() {
            $scope.entry.$delete(function() {
                $scope.listTodo();
            });
        });
    }

    $scope.listTodo = function() {
        $scope.todoList = Todo.query();
    }

}