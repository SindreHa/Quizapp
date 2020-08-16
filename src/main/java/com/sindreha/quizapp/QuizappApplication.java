package com.sindreha.quizapp;

import com.sindreha.quizapp.domain.Question;
import com.sindreha.quizapp.repository.QuizRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class QuizappApplication {

	public static void main(String[] args) {
		SpringApplication.run(QuizappApplication.class, args);
	}

	@Bean
	CommandLineRunner runner(QuizRepository repository) {

		// Lag liste med spørmsål og fyll opp med data
		List<Question> QuestionSet = new ArrayList<Question>();
		QuestionSet.add(new Question("Hva er det høyeste fjellet i Norge?", "Himalaya, Himmelbjerget, Galdhøpiggen, Høyfjellet", 2));
		QuestionSet.add(new Question("Hvem er CEO for Tesla Motors?", "Bill Gates, Tim Cook, Elon Musk", 2));
		QuestionSet.add(new Question("Hvem malte Mona Lisa?", "Claude Monet, Leonardo da Vinci , Vincent Van Gogh, Pablo Picasso", 1));
		QuestionSet.add(new Question("Hva er verdens lengste elv?", "Nilen, Glomma, Amazonas-Apurímac, Mississippi–Missouri", 0));

		return args -> {
			// Lagre spørsmålsett til database på oppstart
			repository.saveAll( QuestionSet );
		};
	}



}
