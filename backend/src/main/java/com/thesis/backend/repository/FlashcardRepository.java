package com.thesis.backend.repository;

import com.thesis.backend.model.Flashcard;
import com.thesis.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FlashcardRepository extends JpaRepository<Flashcard, Long> {
    List<Flashcard> findFlashcardByUser(User user);
}
