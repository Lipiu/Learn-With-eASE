package com.thesis.backend.dtos.auth;

import com.thesis.backend.model.enums.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AuthenticationResponse {
    private String token;
    private String firstName;
    private String lastName;
    private String email;
    private Role role;
}
