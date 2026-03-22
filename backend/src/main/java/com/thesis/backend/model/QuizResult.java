package com.thesis.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Table(name="quiz_result")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class QuizResult {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "quiz_id", nullable = false)
    private Long id;

    @Column(name = "quiz_score", nullable = false)
    private int score;

    @Column(name = "quiz_total_questions", nullable = false)
    private int totalQuestions;

    @Column(name = "percentage", nullable = false)
    private double percentage;

    private boolean passed;

    @Column(name = "quiz_number", nullable = false)
    private int quizNumber;

    @Column(name="created_at", updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
