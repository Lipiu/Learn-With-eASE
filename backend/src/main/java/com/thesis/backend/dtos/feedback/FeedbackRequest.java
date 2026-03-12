package com.thesis.backend.dtos.feedback;

import lombok.*;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FeedbackRequest {
    private int easeOfUseRating;
    private int learningExperienceRating;
    private int uiRating;
    private String comment;
}
