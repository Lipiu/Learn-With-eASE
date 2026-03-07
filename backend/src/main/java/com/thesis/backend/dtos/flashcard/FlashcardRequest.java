package com.thesis.backend.dtos.flashcard;

import lombok.*;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class FlashcardRequest {
    private String question;
    private String answer;
}
