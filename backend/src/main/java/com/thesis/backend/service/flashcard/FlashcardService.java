package com.thesis.backend.service.flashcard;

import com.thesis.backend.model.flashcard.Flashcard;
import com.thesis.backend.model.user.User;
import com.thesis.backend.repository.flashcard.FlashcardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FlashcardService {
    private final FlashcardRepository flashcardRepository;

    private void validateFlashcard(String question, String answer){
        if(question == null || question.isBlank() || answer == null || answer.isBlank()){
            throw new IllegalArgumentException("Question and answer cannot be empty");
        }
    }

    public List<Flashcard> getFlashcardsByUser(User user) {
        return flashcardRepository.findFlashcardsByUser(user);
    }

    public Flashcard createFlashcard(User user, String question, String answer){
        validateFlashcard(question, answer);
        Flashcard flashcard = new Flashcard();
        flashcard.setUser(user);
        flashcard.setQuestion(question.trim());
        flashcard.setAnswer(answer.trim());
        return flashcardRepository.save(flashcard);
    }

    public Flashcard updateFlashcard(Long id, String question, String answer){
        validateFlashcard(question, answer);
        Flashcard flashcard = flashcardRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Flashcard not found"));

        flashcard.setQuestion(question.trim());
        flashcard.setAnswer(answer.trim());
        return flashcardRepository.save(flashcard);
    }

    public void deleteFlashcard(Long id){
        Flashcard flashcard = flashcardRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Flashcard not found"));
        flashcardRepository.delete(flashcard);
    }
}
