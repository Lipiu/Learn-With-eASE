package com.thesis.backend.service;

import com.thesis.backend.dtos.auth.AuthenticationResponse;
import com.thesis.backend.dtos.auth.LoginRequest;
import com.thesis.backend.dtos.auth.RegisterRequest;
import com.thesis.backend.model.User;
import com.thesis.backend.model.enums.Role;
import com.thesis.backend.repository.UserRepository;
import com.thesis.backend.security.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    //helper method to get rid of the duplicated code I had before
    private AuthenticationResponse buildAuthResponse(User user){
        Map<String, Object> extraClaims = Map.of(
                "firstName", user.getFirstName(),
                "lastName", user.getLastName(),
                "role", user.getRole()
        );

        String token = jwtService.generateToken(extraClaims, user);

        return new AuthenticationResponse(
                token,
                user.getFirstName(),
                user.getLastName(),
                user.getEmail(),
                user.getRole()
        );
    }

    //check if email already exists
    public AuthenticationResponse register(RegisterRequest request){
        if(userRepository.findByEmail(request.getEmail()).isPresent()){
            throw new RuntimeException("Email already in use");
        }

        //create user
        User user = User.builder()
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER) //default role for users
                .build();

        userRepository.save(user);

        return buildAuthResponse(user);
    }

    public AuthenticationResponse authenticate(LoginRequest request){
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                    request.getEmail(),
                    request.getPassword()
                )
        );

        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        return buildAuthResponse(user);
    }
}
