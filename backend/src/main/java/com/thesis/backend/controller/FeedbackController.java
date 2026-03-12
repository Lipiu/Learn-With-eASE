package com.thesis.backend.controller;

import com.thesis.backend.dtos.feedback.FeedbackRequest;
import com.thesis.backend.model.User;
import com.thesis.backend.repository.UserRepository;
import com.thesis.backend.service.FeedbackService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/feedback")
@RequiredArgsConstructor
public class FeedbackController {
    private final UserRepository userRepository;
    private final FeedbackService feedbackService;

    @PostMapping
    public ResponseEntity<?> submitFeedback(@RequestBody FeedbackRequest feedbackRequest, @AuthenticationPrincipal UserDetails userDetails){
        if(userDetails == null){
            return ResponseEntity.status(401).body("In order to leave feedback you have to be logged in!");
        }

        User user = userRepository.findByEmail(userDetails.getUsername()).orElseThrow();
        feedbackService.saveFeedback(user, feedbackRequest.getEaseOfUseRating(), feedbackRequest.getLearningExperienceRating(), feedbackRequest.getUiRating(), feedbackRequest.getComment());
        return ResponseEntity.ok("Feedback saved successfully!");
    }

    @GetMapping
    public ResponseEntity<?> getFeedback(){
        return ResponseEntity.ok(feedbackService.getAllFeedback());
    }
}