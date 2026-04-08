package com.thesis.backend.repository.coding;

import com.thesis.backend.model.coding.exercise.CodingExercise;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CodingExerciseRepository extends JpaRepository<CodingExercise, Long> { }
