package br.edu.ufcg.cc.controller;

import br.edu.ufcg.cc.model.Todo;
import br.edu.ufcg.cc.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

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

}
