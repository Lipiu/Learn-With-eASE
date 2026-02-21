package com.thesis.backend.dtos.quiz;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class QuizResultRequest {
    private int score;
    private int totalQuestions;
}
