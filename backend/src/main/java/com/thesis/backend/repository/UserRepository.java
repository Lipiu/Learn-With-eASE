package com.thesis.backend.repository;

import com.thesis.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    //optional - the user may or may not exist in the database
    Optional<User> findByEmail(String email);
}
