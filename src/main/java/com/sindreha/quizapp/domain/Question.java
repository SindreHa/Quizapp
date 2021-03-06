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
    private String answer;
    private int answer_id;

    public Question() {}

    public Question(String question, String options, String answer , int answer_id) {
        this.question = question;
        this.answer = answer;
        this.options = options;
        this.answer_id = answer_id;
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
    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    // Ikke send fasit svar til klient ved GET request
    @JsonIgnore
    public int getAnswer_id() {
        return answer_id;
    }

    public void setAnswer_id(int answer_id) {
        this.answer_id = answer_id;
    }

    @Override
    public String toString() {
        return "Question{" +
                "id=" + id +
                ", question='" + question + '\'' +
                ", options='" + options + '\'' +
                ", answer='" + answer + '\'' +
                ", answer_id=" + answer_id +
                '}';
    }
}
