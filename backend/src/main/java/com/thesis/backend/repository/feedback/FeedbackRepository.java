package com.thesis.backend.repository.feedback;

import com.thesis.backend.model.feedback.Feedback;
import com.thesis.backend.model.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FeedbackRepository extends JpaRepository<Feedback, Long> {
    List<Feedback> findByUser(User user);
}
