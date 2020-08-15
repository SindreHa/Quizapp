package com.sindreha.quizapp.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Quiz {

    @Id @GeneratedValue
    private int id;
    private String questions;
    private String options;
    private int answer;

    public Quiz() {}

    public Quiz(String questions, String options, int answer) {
        this.questions = questions;
        this.options = options;
        this.answer = answer;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getQuestions() {
        return questions;
    }

    public void setQuestions(String questions) {
        this.questions = questions;
    }

    public String getOptions() {
        return options;
    }

    public void setOptions(String options) {
        this.options = options;
    }

    public int getAnswer() {
        return answer;
    }

    public void setAnswer(int answer) {
        this.answer = answer;
    }

    @Override
    public String toString() {
        return "Quiz{" +
                "id=" + id +
                ", questions='" + questions + '\'' +
                ", options='" + options + '\'' +
                ", answer=" + answer +
                '}';
    }
}
