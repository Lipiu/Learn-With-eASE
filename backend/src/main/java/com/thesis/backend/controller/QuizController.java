package com.thesis.backend.controller;

import com.thesis.backend.dtos.quiz.QuizResultRequest;
import com.thesis.backend.model.QuizResult;
import com.thesis.backend.model.User;
import com.thesis.backend.repository.QuizResultRepository;
import com.thesis.backend.repository.UserRepository;
import com.thesis.backend.service.QuizService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/quiz")
@RequiredArgsConstructor
public class QuizController {
    private final UserRepository userRepository;
    private final QuizResultRepository quizResultRepository;
    private final QuizService quizService;

    @PostMapping("/submit")
    public ResponseEntity<?> submitQuiz(@RequestBody QuizResultRequest request, @AuthenticationPrincipal UserDetails userDetails){
        //check if user is logged in
        if(userDetails == null){
            return ResponseEntity.status(401).body("You must be logged in!");
        }
        //find user in database
        User user = userRepository.findByEmail(userDetails.getUsername()).orElseThrow();

        //save to database
        quizService.saveResult(user, request.getScore(), request.getTotalQuestions());

        return ResponseEntity.ok("Quiz saved successfully!");
    }
}
