package com.sindreha.quizapp.repository;

import com.sindreha.quizapp.domain.Quiz;
import org.springframework.data.repository.CrudRepository;

public interface QuizRepository extends CrudRepository<Quiz, Long> {
}
