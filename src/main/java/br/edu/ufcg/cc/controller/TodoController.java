package br.edu.ufcg.cc.controller;

import br.edu.ufcg.cc.model.Todo;
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

    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public List<Todo> list() {
        ArrayList<Todo> todoList = new ArrayList<Todo>();
        for (int i = 1; i < 11; i++) {
            Todo todo = new Todo();
            todo.setTitle("Todo title " + i);
            todo.setDescription("Todo description " + i);
            todoList.add(todo);
        }
        return todoList;
    }

}
