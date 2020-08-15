package com.sindreha.quizapp.repository;

import com.sindreha.quizapp.domain.Question;
import org.springframework.data.repository.CrudRepository;

public interface QuizRepository extends CrudRepository<Question, String> {
}
