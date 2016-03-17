package br.edu.ufcg.cc.controller;

import br.edu.ufcg.cc.model.Todo;
import br.edu.ufcg.cc.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
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

    @RequestMapping(method = RequestMethod.POST)
    public void save(@RequestBody Todo todo) {
        todoRepository.save(todo);
    }

    @RequestMapping(value = "/update", method = RequestMethod.POST)
    public void update(@RequestBody Todo obj) {
        Todo todo = todoRepository.findOne(obj.getId());
        todo.setTitle(obj.getTitle());
        todo.setDescription(obj.getDescription());

        todoRepository.save(todo);
    }

    @RequestMapping(value = "/delete", method = RequestMethod.POST)
    public void delete(@RequestBody Todo obj) {
        Todo todo = todoRepository.findOne(obj.getId());
        todoRepository.delete(todo);
    }

    @RequestMapping(method = RequestMethod.DELETE)
    public void restDelete(@RequestBody Todo obj) {
        Todo todo = todoRepository.findOne(obj.getId());
        todoRepository.delete(todo);
    }

}
