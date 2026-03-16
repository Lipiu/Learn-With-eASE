package com.thesis.backend.repository;

import com.thesis.backend.model.CodingExerciseResult;
import com.thesis.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CodingExerciseResultRepository extends JpaRepository<CodingExerciseResult, Long> {
    List<CodingExerciseResult> findByUser(User user);
}
