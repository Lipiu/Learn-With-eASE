package com.thesis.backend.service;

import com.thesis.backend.model.Feedback;
import com.thesis.backend.model.User;
import com.thesis.backend.repository.FeedbackRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
public class FeedbackService {
    private final FeedbackRepository feedbackRepository;

    public Feedback saveFeedback(User user, int easeRating, int learningRating, int uiRating, String comment){
        Feedback feedback = new Feedback();
        feedback.setUser(user);
        feedback.setEaseOfUseRating(easeRating);
        feedback.setLearningExperienceRating(learningRating);
        feedback.setUiRating(uiRating);
        feedback.setComment(comment);
        feedback.setCreatedAt(new Date());
        return feedbackRepository.save(feedback);

    }

    public List<Feedback> getAllFeedback(){
        return feedbackRepository.findAll();
    }
}
