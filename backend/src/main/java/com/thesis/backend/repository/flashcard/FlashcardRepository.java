package com.thesis.backend.repository.flashcard;

import com.thesis.backend.model.flashcard.Flashcard;
import com.thesis.backend.model.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FlashcardRepository extends JpaRepository<Flashcard, Long> {
    List<Flashcard> findFlashcardsByUser(User user);
}
