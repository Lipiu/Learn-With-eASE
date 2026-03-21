package com.thesis.backend.controller;

import com.thesis.backend.dtos.auth.UserResponse;
import com.thesis.backend.model.User;
import com.thesis.backend.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminController {
    private final UserRepository userRepository;
    private final QuizResultRepository quizResultRepository;
    private final CodingExerciseResultRepository codingExerciseResultRepository;
    private final FlashcardRepository flashcardRepository;
    private final FeedbackRepository feedbackRepository;

    @GetMapping("/users")
    public ResponseEntity<List<UserResponse>> getAllUsers(){
        List<UserResponse> users = userRepository.findAll().stream().map(user -> new UserResponse(
                user.getUserId(),
                user.getFirstName(),
                user.getLastName(),
                user.getEmail(),
                user.getRole()
        )).toList();
        return ResponseEntity.ok(users);
    }

    @GetMapping("/users/{id}/quiz-results")
    public ResponseEntity<?> getUserQuizResults(@PathVariable Long id){
        User user = userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
        return ResponseEntity.ok(quizResultRepository.findByUser(user));
    }

    @GetMapping("/users/{id}/exercise-results")
    public ResponseEntity<?> getUserExerciseResults(@PathVariable Long id){
        User user = userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
        return ResponseEntity.ok(codingExerciseResultRepository.findByUser(user));
    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Long id, @AuthenticationPrincipal UserDetails userDetails){
        User currentUser = userRepository.findByEmail(userDetails.getUsername()).orElseThrow();
        if(currentUser.getUserId().equals(id)){
            return ResponseEntity.status(400).body("You cannot delete your own account");
        }
        User userToDelete = userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
        quizResultRepository.deleteAll(quizResultRepository.findByUser(userToDelete));
        codingExerciseResultRepository.deleteAll(codingExerciseResultRepository.findByUser(userToDelete));
        flashcardRepository.deleteAll(flashcardRepository.findFlashcardByUser(userToDelete));
        feedbackRepository.deleteAll(feedbackRepository.findByUser(userToDelete));

        userRepository.deleteById(id);
        return ResponseEntity.ok("User deleted successfully");
    }
}
