package com.thesis.backend.service;

import com.thesis.backend.model.QuizResult;
import com.thesis.backend.model.User;
import com.thesis.backend.repository.QuizResultRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class QuizService {
    private final QuizResultRepository quizResultRepository;

    public void saveResult(User user, int score, int totalQuestions){
        double percentage = ((double) score / totalQuestions) * 100; //calculate percentage
        boolean passed = percentage >= 50; //determine if the user passes or not

        //create QuizResult object
        QuizResult result = new QuizResult();
        result.setScore(score);
        result.setTotalQuestions(totalQuestions);
        result.setPercentage(percentage);
        result.setPassed(passed);
        result.setUser(user);

        quizResultRepository.save(result);
    }
}
