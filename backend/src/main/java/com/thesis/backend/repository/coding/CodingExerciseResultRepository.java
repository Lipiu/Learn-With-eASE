package com.thesis.backend.repository.coding;

import com.thesis.backend.model.coding.exercise.CodingExerciseResult;
import com.thesis.backend.model.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CodingExerciseResultRepository extends JpaRepository<CodingExerciseResult, Long> {
    List<CodingExerciseResult> findByUser(User user);
}
