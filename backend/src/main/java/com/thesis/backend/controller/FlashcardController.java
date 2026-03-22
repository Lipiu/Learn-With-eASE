package com.thesis.backend.controller;

import com.thesis.backend.dtos.flashcard.FlashcardRequest;
import com.thesis.backend.model.Flashcard;
import com.thesis.backend.model.User;
import com.thesis.backend.repository.UserRepository;
import com.thesis.backend.service.FlashcardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/flashcard")
@RequiredArgsConstructor
public class FlashcardController {
    private final UserRepository userRepository;
    private final FlashcardService flashcardService;

    @GetMapping
    public ResponseEntity<List<Flashcard>> getFlashcards(@AuthenticationPrincipal UserDetails userDetails){
        if(userDetails == null){
            return ResponseEntity.badRequest().build();
        }
        User user = userRepository.findByEmail(userDetails.getUsername()).orElseThrow();
        List<Flashcard> flashcards = flashcardService.getFlashcardsByUser(user);
        return ResponseEntity.ok(flashcards);
    }

    @PostMapping
    public ResponseEntity<Flashcard> createFlashcard(@RequestBody FlashcardRequest flashcardRequest, @AuthenticationPrincipal UserDetails userDetails){
        if(userDetails == null){
            return ResponseEntity.badRequest().build();
        }
        User user = userRepository.findByEmail(userDetails.getUsername()).orElseThrow();
        Flashcard flashcard = flashcardService.createFlashcard(user, flashcardRequest.getQuestion(), flashcardRequest.getAnswer());
        return ResponseEntity.ok(flashcard);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Flashcard> updateFlashcard(@PathVariable Long id, @RequestBody FlashcardRequest flashcardRequest, @AuthenticationPrincipal UserDetails userDetails){
        if(userDetails == null){
            return ResponseEntity.badRequest().build();
        }
        Flashcard flashcard = flashcardService.updateFlashcard(id, flashcardRequest.getQuestion(), flashcardRequest.getAnswer());
        return ResponseEntity.ok(flashcard);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFlashcard(@PathVariable Long id, @AuthenticationPrincipal UserDetails userDetails){
        if(userDetails == null){
            return ResponseEntity.badRequest().build();
        }
        flashcardService.deleteFlashcard(id);
        return ResponseEntity.ok().build();
    }
}
