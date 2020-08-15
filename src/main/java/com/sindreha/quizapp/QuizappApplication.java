package com.sindreha.quizapp;

import com.sindreha.quizapp.domain.Quiz;
import com.sindreha.quizapp.repository.QuizRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class QuizappApplication {

	public static void main(String[] args) {
		SpringApplication.run(QuizappApplication.class, args);
	}

	@Bean
	CommandLineRunner runner(QuizRepository repository) {
		return args -> {
			repository.save(
					new Quiz("Hva er det høyeste fjellet i Norge?", "Himalaya, Himmelbjerget, Galdhøpiggen, Høyfjellet", 3)
			);
			repository.save(
					new Quiz("Hvem er CEO for Tesla Motors?", "Bill Gates, Tim Cook, Elon Musk", 3)
			);
			repository.save(
					new Quiz("Hvem malte Mona Lisa?", "Claude Monet, Leonardo da Vinci , Vincent Van Gogh, Pablo Picasso", 2)
			);
			repository.save(
					new Quiz("Hva er verdens lengste elv?", "Nilen, Glomma, Amazonas-Apurímac, Mississippi–Missouri", 2)
			);
		};
	}

}
