package com.thesis.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

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

    @Column(name="created_at", updatable = false)
    @Temporal(TemporalType.DATE) //Temporal is deprecated but for this purpose is good enough
    private Date createdAt = new Date();

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
