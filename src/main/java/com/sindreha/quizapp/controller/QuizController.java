package com.sindreha.quizapp.controller;

import com.sindreha.quizapp.domain.Quiz;
import com.sindreha.quizapp.repository.QuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class QuizController {

    @Autowired
    private QuizRepository repository;

    @GetMapping("/quizDataset")
    @CrossOrigin
    public Iterable <Quiz> getQuizDataset() {
        return repository.findAll();
    }
}
