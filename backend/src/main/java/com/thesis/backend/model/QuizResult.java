package com.thesis.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="quiz_result")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class QuizResult {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int score;
    private int totalQuestions;
    private double percentage;
    private boolean passed;

    @ManyToOne
    @JoinColumn(name = "user_user_id")
    private User user;
}
