package com.sindreha.quizapp.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

public class Answer {

    @Id @GeneratedValue
    private int id;
    private String question;
    private int question_id;
    private String answer;
    private int answer_id;

    Answer() {}

    public Answer(String question, int question_id, String answer, int answer_id) {
        this.question = question;
        this.question_id = question_id;
        this.answer = answer;
        this.answer_id = answer_id;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public int getQuestion_id() {
        return question_id;
    }

    public void setQuestion_id(int question_id) {
        this.question_id = question_id;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public int getAnswer_id() {
        return answer_id;
    }

    public void setAnswer_id(int answer_id) {
        this.answer_id = answer_id;
    }

    @Override
    public String toString() {
        return "Game{" +
                "id=" + id +
                ", question='" + question + '\'' +
                ", question_id=" + question_id +
                ", answer='" + answer + '\'' +
                ", answer_id=" + answer_id +
                '}';
    }
}
