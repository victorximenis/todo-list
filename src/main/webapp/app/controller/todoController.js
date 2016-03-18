/**
 * Created by victor on 05/03/16.
 */
app.controller('todoCtrl', todoController);

function todoController($scope, Todo, notificationFactory) {

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
            notificationFactory.showSuccess("To do saved sucessfully!", function(){});
            $scope.listTodo();
        }).catch(function(todo) {
            notificationFactory.showError("Erro trying to save To do!", function(){
                console.log(todo.data.error);
            });
        });
    }

    $scope.update = function() {
        $scope.todoUpdate.$update(function() {
            $('#updateModal').modal('toggle');
            notificationFactory.showSuccess("To do updated sucessfully!", function(){});
            $scope.listTodo();
        }).catch(function(todo) {
            notificationFactory.showError("Erro trying to update To do!", function(){
                console.log(todo.data.error);
            });
        });
    }

    $scope.delete = function(index) {
        $scope.entry = Todo.get({id: $scope.todoList[index].id}, function() {
            $scope.entry.$delete(function() {
                notificationFactory.showSuccess("To do deleted sucessfully!", function(){});
                $scope.listTodo();
            }).catch(function(todo) {
                notificationFactory.showError("Erro trying to delete To do!", function(){
                    console.log(todo.data.error);
                });
            });
        });
    }

    $scope.listTodo = function() {
        $scope.todoList = Todo.query();
    }

}