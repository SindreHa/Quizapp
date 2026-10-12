package com.sindreha.quizapp.domain;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OrderColumn;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Game {
    @Id @GeneratedValue
    private int id;
    @ElementCollection
    @OrderColumn
    private List<String> questions = new ArrayList<>();
    @ElementCollection
    @OrderColumn
    private List<String> answers = new ArrayList<>();
    @ElementCollection
    @OrderColumn
    private List<String> userAnswers = new ArrayList<>();
    private int score;

    public Game() {}

    public Game(List<String> questions, List<String> answers, List<String> userAnswers, int score) {
        this.questions = questions;
        this.answers = answers;
        this.userAnswers = userAnswers;
        this.score = score;
    }

    public List<String> getQuestions() {
        return questions;
    }

    public void setQuestions(List<String> questions) {
        this.questions = questions;
    }

    public List<String> getAnswers() {
        return answers;
    }

    public void setAnswers(List<String> answers) {
        this.answers = answers;
    }

    public List<String> getUserAnswers() {
        return userAnswers;
    }

    public void setUserAnswers(List<String> userAnswers) {
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
                ", questions=" + questions +
                ", answers=" + answers +
                ", userAnswers=" + userAnswers +
                ", score=" + score +
                '}';
    }
}
