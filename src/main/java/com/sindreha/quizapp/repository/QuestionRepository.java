package com.sindreha.quizapp.repository;

import com.sindreha.quizapp.domain.Question;
import org.springframework.data.repository.CrudRepository;

public interface QuestionRepository extends CrudRepository<Question, String> {
}
