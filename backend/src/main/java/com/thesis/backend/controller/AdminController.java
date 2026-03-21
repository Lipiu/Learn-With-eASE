package com.thesis.backend.controller;

import com.thesis.backend.dtos.auth.UserResponse;
import com.thesis.backend.model.User;
import com.thesis.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminController {
    private final UserRepository userRepository;

    @GetMapping("/users")
    public ResponseEntity<List<UserResponse>> getAllUsers(){
        List<UserResponse> users = userRepository.findAll().stream().map(user -> new UserResponse(
                user.getUserId(),
                user.getFirstName(),
                user.getLastName(),
                user.getEmail(),
                user.getRole()
        )).toList();
        return ResponseEntity.ok(users);
    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Long id, @AuthenticationPrincipal UserDetails userDetails){
        User currentUser = userRepository.findByEmail(userDetails.getUsername()).orElseThrow();
        if(currentUser.getUserId().equals(id)){
            return ResponseEntity.status(400).body("You cannot delete your own account");
        }
        if(!userRepository.existsById(id)){
            return ResponseEntity.status(404).body("User not found");
        }
        userRepository.deleteById(id);
        return ResponseEntity.ok("User deleted successfully");
    }
}
