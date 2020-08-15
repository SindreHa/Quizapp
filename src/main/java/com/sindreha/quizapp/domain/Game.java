package com.sindreha.quizapp.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Game {

    @Id @GeneratedValue
    private int id;
    private String question_id;
    private String answer;

    Game() {}

    public Game(String question_id, String answer) {
        this.question_id = question_id;
        this.answer = answer;
    }

    public String getQuestion_id() {
        return question_id;
    }

    public void setQuestion_id(String question_id) {
        this.question_id = question_id;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    @Override
    public String toString() {
        return "Game{" +
                "id=" + id +
                ", quiestionId=" + question_id +
                ", answer=" + answer +
                '}';
    }
}
