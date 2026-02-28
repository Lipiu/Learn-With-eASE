package com.thesis.backend.config;

import com.thesis.backend.model.User;
import com.thesis.backend.model.enums.Role;
import com.thesis.backend.repository.UserRepository;
import com.thesis.backend.security.JwtAuthenticationFilter;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {
    private final JwtAuthenticationFilter jwtAuthenticationFilter;
    private final AuthenticationProvider authenticationProvider;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) {
        http
                .cors(cors -> cors.configurationSource(corsConfigurationSource())) //allow REACT frontend to communicate with the backend
                .csrf(AbstractHttpConfigurer::disable) //no need since we use JWT, it would have been a risk if we used session-based authentication
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/api/auth/**").permitAll() //everyone can access
                        .requestMatchers("/api/admin/**").hasRole("ADMIN") //protect ADMIN endpoint
                        .anyRequest().authenticated() //must be authenticated but any role works
                )
                .sessionManagement(sess -> sess.sessionCreationPolicy(SessionCreationPolicy.STATELESS)) //every request must carry its own JWT
                .authenticationProvider(authenticationProvider) //provider which verifies the password
                .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class); //process the JWT on every request
        return http.build();
    }

    //create admin account -> probably not best practice but it works for now
    @Bean
    CommandLineRunner createAdmin(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        return args -> {
            if(userRepository.findByEmail("admin@admin.com").isEmpty()){
                User admin = User.builder()
                        .firstName("System")
                        .lastName("Admin")
                        .email("admin@admin.com")

                        //encode the password because spring security checks:
                        //passwordEncoder.matches(rawPassword, encodedPassword) so we cannot store it by plain text
                        .password(passwordEncoder.encode("admin123"))
                        .role(Role.ADMIN) //give admin role
                        .build();
                userRepository.save(admin);
            }
        };
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource(){
        CorsConfiguration corsConfiguration = new CorsConfiguration();
        corsConfiguration.setAllowedOrigins(List.of("http://localhost:5173")); //allow vite frontend
        corsConfiguration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS")); // list of http methods
        corsConfiguration.setAllowedHeaders(List.of("Authorization", "Content-Type")); // allow headers
        corsConfiguration.setAllowCredentials(true); // allow credentials

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", corsConfiguration);
        return source;
    }
}
