package com.sindreha.quizapp.controller;

import com.sindreha.quizapp.domain.Answer;
import com.sindreha.quizapp.domain.Game;
import com.sindreha.quizapp.domain.Question;
import com.sindreha.quizapp.repository.GameRepository;
import com.sindreha.quizapp.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class QuizController {

    // Question repository
    @Autowired
    private QuestionRepository questionRepository;
    // Game repository
    @Autowired
    private GameRepository gameRepository;

    // GET handler
    @GetMapping("/quizDataset")
    @CrossOrigin
    public Iterable <Question> getQuizDataset() {
        return questionRepository.findAll();
    }

    // POST handler
    @RequestMapping(value = "/results", method = RequestMethod.POST)
    @CrossOrigin
    public Game getScore(@RequestBody List<Answer> answerList) {

        Game game = new Game();

        // Lag liste med brukersvar hentet fra POST request
        ArrayList<String> userAnswers = new ArrayList<>();
        ArrayList<Integer> userAnswersIds = new ArrayList<>();
        answerList.forEach( (element) -> {
            // Hent ut svar
            userAnswers.add(element.getAnswer());
            userAnswersIds.add(element.getAnswer_id());
        });
        game.setUserAnswers(userAnswers.toString());

        // Lag liste med fasit på svar hentet fra database
        ArrayList<String> questions = new ArrayList<>();
        ArrayList<String> questionanswers = new ArrayList<>();
        ArrayList<Integer> questionsIds = new ArrayList<>();
        Iterable<Question> list = questionRepository.findAll();
        list.forEach( (element) -> {
            // Hent ut fasit svar
            questions.add(element.getQuestion());
            questionanswers.add(element.getAnswer());
            questionsIds.add(element.getAnswer_id());
        });
        game.setQuestions(questions.toString());
        game.setAnswers(questionanswers.toString());

        int score = 0;

        for (int i=0; i < userAnswers.size(); i++) {
            // Sammenlign brukersvar med fasit og øk teller pr riktig
            if (userAnswersIds.get(i) == questionsIds.get(i)) {
                score++;
            }
        }

        game.setScore(score);

        gameRepository.save(game);
        return game;
    }
}
