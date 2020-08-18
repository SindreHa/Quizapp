package com.sindreha.quizapp.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Arrays;

@Entity
public class Game {
    @Id @GeneratedValue
    private int id;
    private String questions;
    private String answers;
    private String userAnswers;
    private int score;

    public Game() {}

    public Game(String questions, String answers, String userAnswers, int score) {
        this.questions = questions;
        this.answers = answers;
        this.userAnswers = userAnswers;
        this.score = score;
    }

    public String getQuestions() {
        return questions;
    }

    public void setQuestions(String questions) {
        this.questions = questions;
    }

    public String getAnswers() {
        return answers;
    }

    public void setAnswers(String answers) {
        this.answers = answers;
    }

    public String getUserAnswers() {
        return userAnswers;
    }

    public void setUserAnswers(String userAnswers) {
        this.userAnswers = userAnswers;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    @Override
    public String toString() {
        return "Game{" +
                "id=" + id +
                ", questions='" + questions + '\'' +
                ", answers='" + answers + '\'' +
                ", userAnswers='" + userAnswers + '\'' +
                ", score=" + score +
                '}';
    }
}
