package com.sindreha.quizapp.controller;

import com.sindreha.quizapp.domain.Game;
import com.sindreha.quizapp.domain.Question;
import com.sindreha.quizapp.repository.QuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class QuizController {

    // Database repository
    @Autowired
    private QuizRepository repository;

    // GET handler
    @GetMapping("/quizDataset")
    @CrossOrigin
    public Iterable <Question> getQuizDataset() {
        return repository.findAll();
    }

    // POST handler
    @RequestMapping(value = "/results", method = RequestMethod.POST)
    @CrossOrigin
    public int getScore(@RequestBody List<Game> gameList) {

        // Lag liste med brukersvar hentet fra POST request
        ArrayList userAnswers = new ArrayList();
        gameList.forEach( (element) -> {
            // Hent ut svar
            userAnswers.add(element.getAnswer());
            //System.out.println( element.getAnswer());
        });

        // Lag liste med fasit på svar hentet fra database
        ArrayList questionAnswers = new ArrayList();
        Iterable<Question> list = repository.findAll();
        list.forEach( (element) -> {
            // Hent ut fasit svar
            questionAnswers.add(element.getAnswer());
            //System.out.println( element.getAnswer());
        });

        int score = 0;

        for (int i=0; i < userAnswers.size(); i++) {
            // Sammenlign brukersvar med fasit og øk teller pr riktig
            if ((int)userAnswers.get(i) == (int)questionAnswers.get(i)) {
                score++;
            }
        }

        return score;
    }
}
