package com.thesis.backend.service.feedback;

import com.thesis.backend.model.feedback.Feedback;
import com.thesis.backend.model.user.User;
import com.thesis.backend.repository.feedback.FeedbackRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FeedbackService {
    private final FeedbackRepository feedbackRepository;

    private void validateRatings(int ease, int learning, int ui){
        if(ease < 1 || ease > 5 || learning < 1 || learning > 5 || ui < 1 || ui > 5) {
            throw new IllegalArgumentException("Ratings must be between 1 and 5");
        }
    }

    public Feedback saveFeedback(User user, int easeRating, int learningRating, int uiRating, String comment){
        validateRatings(easeRating, learningRating, uiRating); //validate the feedback

        //create the feedback object
        Feedback feedback = new Feedback();
        feedback.setUser(user);
        feedback.setEaseOfUseRating(easeRating);
        feedback.setLearningExperienceRating(learningRating);
        feedback.setUiRating(uiRating);
        feedback.setComment(comment);
        feedback.setCreatedAt(LocalDateTime.now());
        return feedbackRepository.save(feedback);
    }

    public void deleteFeedback(Long id){
        if(!feedbackRepository.existsById(id)){
            throw new IllegalArgumentException("Feedback not found");
        }
        feedbackRepository.deleteById(id);
    }

    public List<Feedback> getAllFeedback(){
        return feedbackRepository.findAll();
    }
}
