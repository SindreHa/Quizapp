package com.sindreha.quizapp.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Question {

    @Id @GeneratedValue
    private int id;
    private String question;
    private String options;
    private int answer;

    public Question() {}

    public Question(String question, String options, int answer) {
        this.question = question;
        this.options = options;
        this.answer = answer;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getOptions() {
        return options;
    }

    public void setOptions(String options) {
        this.options = options;
    }

    // Ikke send fasit svar til klient ved GET request
    @JsonIgnore
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
                ", questions='" + question + '\'' +
                ", options='" + options + '\'' +
                ", answer=" + answer +
                '}';
    }
}
