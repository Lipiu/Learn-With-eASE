package com.thesis.backend.repository;

import com.thesis.backend.model.Feedback;
import com.thesis.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FeedbackRepository extends JpaRepository<Feedback, Long> {
    List<Feedback> findByUser(User user);
}
