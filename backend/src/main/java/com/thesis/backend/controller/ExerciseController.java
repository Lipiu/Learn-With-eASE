package com.thesis.backend.controller;

import com.thesis.backend.dtos.coding_exercise.CodeSubmissionRequest;
import com.thesis.backend.dtos.coding_exercise.ExerciseResponse;
import com.thesis.backend.dtos.coding_exercise.ExerciseSubmitResponse;
import com.thesis.backend.model.User;
import com.thesis.backend.repository.UserRepository;
import com.thesis.backend.service.ExerciseService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/exercises")
@RequiredArgsConstructor
public class ExerciseController {
    private final ExerciseService exerciseService;
    private final UserRepository userRepository;

    @GetMapping
    public ResponseEntity<List<ExerciseResponse>> getAllExercises() {
        return ResponseEntity.ok(exerciseService.getAllExercises());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ExerciseResponse> getExerciseById(@PathVariable Long id) {
        return ResponseEntity.ok(exerciseService.getExerciseById(id));
    }

    @GetMapping("/solved")
    public ResponseEntity<List<Long>> getSolvedExerciseIds(@AuthenticationPrincipal UserDetails userDetails){
        if(userDetails == null){
            return ResponseEntity.status(401).build();
        }
        User user = userRepository.findByEmail(userDetails.getUsername()).orElseThrow();
        List<Long> solvedIds = exerciseService.getSolvedExerciseIds(user);
        return ResponseEntity.ok(solvedIds);
    }

    @PostMapping("/{id}/submit")
    public ResponseEntity<ExerciseSubmitResponse> submitExercise(
            @PathVariable Long id,
            @RequestBody CodeSubmissionRequest request,
            @AuthenticationPrincipal UserDetails userDetails) {
        if (userDetails == null) {
            return ResponseEntity.status(401).build();
        }
        User user = userRepository.findByEmail(userDetails.getUsername()).orElseThrow();
        ExerciseSubmitResponse response = exerciseService.submitExercise(id, request.getCode(), user);
        return ResponseEntity.ok(response);
    }
}