package com.sindreha.quizapp;

import com.sindreha.quizapp.domain.Question;
import com.sindreha.quizapp.repository.QuestionRepository;
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
	CommandLineRunner runner(QuestionRepository repository) {

		// Lag liste med spørmsål og fyll opp med data
		List<Question> questionSet = new ArrayList<>();
		questionSet.add(new Question("Hva er det høyeste fjellet i Norge?", List.of("Himalaya", "Himmelbjerget", "Galdhøpiggen", "Høyfjellet"), "Galdhøpiggen", 2));
		questionSet.add(new Question("Hvem er CEO for Tesla Motors?", List.of("Bill Gates", "Tim Cook", "Elon Musk"), "Elon Musk", 2));
		questionSet.add(new Question("Hvem malte Mona Lisa?", List.of("Claude Monet", "Leonardo da Vinci", "Vincent Van Gogh", "Pablo Picasso"), "Leonardo da Vinci", 1));
		questionSet.add(new Question("Hva er verdens lengste elv?", List.of("Nilen", "Glomma", "Amazonas-Apurímac", "Mississippi-Missouri"), "Nilen", 0));

		return args -> {
			// Lagre spørsmålsett til database på oppstart, kun hvis tom (unngår duplikater)
			if (repository.count() == 0) {
				repository.saveAll( questionSet );
			}
		};
	}



}
