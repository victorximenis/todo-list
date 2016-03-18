package br.edu.ufcg.cc.controller;

import br.edu.ufcg.cc.model.Todo;
import br.edu.ufcg.cc.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by victor on 05/03/16.
 */
@RestController
@RequestMapping("/todo")
public class TodoController {

    @Autowired
    private TodoRepository todoRepository;

    @RequestMapping(method = RequestMethod.GET)
    public List<Todo> list() {
        List<Todo> todoList = (List<Todo>) todoRepository.findAll();
        return todoList;
    }

    @RequestMapping(method = RequestMethod.GET, value = "{id}")
    public Todo get(@PathVariable Long id) {
        Todo todo = todoRepository.findOne(id);
        return todo;
    }

    @RequestMapping(method = RequestMethod.POST)
    public void save(@RequestBody Todo todo) {
        todoRepository.save(todo);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "{id}")
    public void update(@RequestBody Todo obj, @PathVariable Long id) {
        Todo todo = todoRepository.findOne(id);
        todo.setTitle(obj.getTitle());
        todo.setDescription(obj.getDescription());

        todoRepository.save(todo);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "{id}")
    public void restDelete(@PathVariable Long id) {
        Todo todo = todoRepository.findOne(id);
        todoRepository.delete(todo);
    }

}
