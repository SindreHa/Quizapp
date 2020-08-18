package com.sindreha.quizapp.repository;

import com.sindreha.quizapp.domain.Game;
import com.sindreha.quizapp.domain.Question;
import org.springframework.data.repository.CrudRepository;

public interface GameRepository extends CrudRepository<Game, String> {
}
