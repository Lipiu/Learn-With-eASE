package com.thesis.backend.controller.exercise;

import com.thesis.backend.dtos.quiz.QuizResultRequest;
import com.thesis.backend.model.quiz.result.QuizResult;
import com.thesis.backend.model.user.User;
import com.thesis.backend.repository.user.UserRepository;
import com.thesis.backend.service.exercise.quiz.service.QuizService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/quiz")
@RequiredArgsConstructor
public class QuizController {
    private final UserRepository userRepository;
    private final QuizService quizService;

    @PostMapping("/submitted")
    public ResponseEntity<String> submitQuiz(@RequestBody QuizResultRequest request, @AuthenticationPrincipal UserDetails userDetails){
        //check if user is logged in
        if(userDetails == null){
            return ResponseEntity.status(401).body("You must be logged in!");
        }
        //find user in database
        User user = userRepository.findByEmail(userDetails.getUsername()).orElseThrow();

        //save to database
        quizService.saveResult(user, request.getQuizNumber(), request.getScore(), request.getTotalQuestions());

        return ResponseEntity.ok("Quiz saved successfully!");
    }

    //so that if the user is logged in and refreshes the page the quiz will not restart
    @GetMapping("/results")
    public ResponseEntity<List<QuizResult>> getResults(@AuthenticationPrincipal UserDetails userDetails){
        if(userDetails == null){
            return ResponseEntity.status(401).body(null);
        }
        User user = userRepository.findByEmail(userDetails.getUsername()).orElseThrow();
        return ResponseEntity.ok(quizService.getResultsByUser(user));
    }
}
