package com.sindreha.quizapp.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Game {

    @Id @GeneratedValue
    private int id;
    private int question_id;
    private int answer;

    Game() {}

    public Game(int question_id, int answer) {
        this.question_id = question_id;
        this.answer = answer;
    }

    public int getQuestion_id() {
        return question_id;
    }

    public void setQuestion_id(int question_id) {
        this.question_id = question_id;
    }

    public int getAnswer() {
        return answer;
    }

    public void setAnswer(int answer) {
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
