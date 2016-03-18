package br.edu.ufcg.cc.repository;

import br.edu.ufcg.cc.model.Todo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by victor on 05/03/16.
 */
@Repository
public interface TodoRepository extends CrudRepository<Todo, Long> {
}
