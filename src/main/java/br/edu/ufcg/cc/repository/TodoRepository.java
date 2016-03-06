package br.edu.ufcg.cc.repository;

import br.edu.ufcg.cc.model.Todo;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by victor on 05/03/16.
 */
public interface TodoRepository extends CrudRepository<Todo, Long> {
}
