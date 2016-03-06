package br.edu.ufcg.cc.model;

import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * Created by victor on 05/03/16.
 */
@Entity
@Table(name = "todos")
public class Todo extends GenericModel {

    private String title;
    private String description;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

}
