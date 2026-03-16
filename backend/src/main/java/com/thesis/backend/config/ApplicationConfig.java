package com.thesis.backend.config;

import com.thesis.backend.model.CodingExercise;
import com.thesis.backend.repository.CodingExerciseRepository;
import com.thesis.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.client.RestTemplate;

@Configuration
@RequiredArgsConstructor
public class ApplicationConfig {
    private final UserRepository userRepository;

    //when we want to search for a username we look for their email
    @Bean
    public UserDetailsService userDetailsService(){
        return username -> userRepository.findByEmail(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }

    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder(); //use BCrypt as hashing algorithm
    }

    //verify the password
    @Bean
    public AuthenticationProvider authenticationProvider(UserDetailsService userDetailsService, PasswordEncoder passwordEncoder){
        DaoAuthenticationProvider daoAuthenticationProvider = new DaoAuthenticationProvider(userDetailsService);
        daoAuthenticationProvider.setPasswordEncoder(passwordEncoder);
        return daoAuthenticationProvider;
    }



    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) {
        return config.getAuthenticationManager();
    }

    @Bean
    public RestTemplate restTemplate(){
        return new RestTemplate();
    }

    @Bean
    CommandLineRunner seed(CodingExerciseRepository exerciseRepository){
        return args -> {
            if(exerciseRepository.count() == 0){
                CodingExercise ex = new CodingExercise();
                ex.setTitle("Hello World");
                ex.setDescription("Write a Java program that prints exactly: Hello, World!");
                ex.setStarterCode(
                        "public class Main {\n" +
                                "    public static void main(String[] args) {\n" +
                                "        // write your code here\n" +
                                "    }\n" +
                                "}"
                );
                ex.setExpectedOutput("Hello, World!");
                ex.setSectionNumber(1);
                exerciseRepository.save(ex);
            }
        };
    }
}
