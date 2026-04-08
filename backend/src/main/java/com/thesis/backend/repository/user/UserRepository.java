package com.thesis.backend.repository.user;

import com.thesis.backend.model.user.User;
import lombok.NonNull;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<@NonNull User,@NonNull Long> {
    //optional - the user may or may not exist in the database
    Optional<User> findByEmail(String email);
}
