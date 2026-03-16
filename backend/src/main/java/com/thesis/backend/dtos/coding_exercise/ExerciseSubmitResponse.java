package com.thesis.backend.dtos.coding_exercise;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ExerciseSubmitResponse {
    private boolean passed;
    private String message;
}
