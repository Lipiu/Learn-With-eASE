package com.thesis.backend.service;

import com.thesis.backend.model.Flashcard;
import com.thesis.backend.model.User;
import com.thesis.backend.repository.FlashcardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FlashcardService {
    private final FlashcardRepository flashcardRepository;

    public List<Flashcard> getFlashcardByUser(User user) {
        return flashcardRepository.findFlashcardByUser(user);
    }

    public Flashcard createFlashcard(User user, String question, String answer){
        Flashcard flashcard = new Flashcard();
        flashcard.setUser(user);
        flashcard.setQuestion(question);
        flashcard.setAnswer(answer);
        return flashcardRepository.save(flashcard);
    }

    public Flashcard updateFlashcard(Long id, String question, String answer){
        Flashcard flashcard = flashcardRepository.findById(id).orElseThrow(() -> new RuntimeException("Flashcard not found"));

        flashcard.setQuestion(question);
        flashcard.setAnswer(answer);
        return flashcardRepository.save(flashcard);
    }

    public void deleteFlashcard(Long id){
        Flashcard flashcard = flashcardRepository.findById(id).orElseThrow(() -> new RuntimeException("Flashcard not found"));
        flashcardRepository.delete(flashcard);
    }
}
