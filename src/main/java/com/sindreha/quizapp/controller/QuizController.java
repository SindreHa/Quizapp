package com.sindreha.quizapp.controller;

import com.sindreha.quizapp.domain.Game;
import com.sindreha.quizapp.domain.Question;
import com.sindreha.quizapp.repository.QuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

@RestController
public class QuizController {

    @Autowired
    private QuizRepository qRepository;

    @GetMapping("/quizDataset")
    @CrossOrigin
    public Iterable <Question> getQuizDataset() {
        return qRepository.findAll();
    }

    @RequestMapping(value = "/results", method = RequestMethod.POST)
    @CrossOrigin
    public int getScore(@RequestBody List<Game> gameList) {


        ArrayList userAnswers = new ArrayList();
        gameList.forEach( (element) -> {
            userAnswers.add(element.getAnswer());
            //System.out.println( element.getAnswer());
        });

        ArrayList questionAnswers = new ArrayList();
        Iterable<Question> list = qRepository.findAll();
        list.forEach( (element) -> {
            questionAnswers.add(element.getAnswer());
            //System.out.println( element.getAnswer());
        });

        int score = 0;

        for (int i=0; i < userAnswers.size(); i++) {
            if ((int)userAnswers.get(i) == (int)questionAnswers.get(i)) {
                score++;
            }
        }

        return score;
    }
}
