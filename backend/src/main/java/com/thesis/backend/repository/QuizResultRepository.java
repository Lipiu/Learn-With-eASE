package com.thesis.backend.repository;

import com.thesis.backend.model.QuizResult;
import com.thesis.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuizResultRepository extends JpaRepository<QuizResult, Long> {
    List<QuizResult> findByUser(User user); //fetch all quiz attempts by user
}
