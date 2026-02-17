package com.thesis.backend.dtos;

import lombok.Data;

@Data
public class LoginRequest {
    private String email; //since we will use email to login
    private String password;
}
