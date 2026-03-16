package com.thesis.backend.service;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class SandboxService {
    @Value("${judge0.api.key}")
    private String apiKey;
    private final RestTemplate restTemplate;

    public String runCode(String code){
        String submitURL = "https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true";

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("X-RapidAPI-Key", apiKey);
        headers.set("X-RapidAPI-Host", "judge0-ce.p.rapidapi.com");

        Map<String, Object> body = new HashMap<>();
        body.put("source_code", code);
        body.put("language_id", 62); //judge0 java ID

        HttpEntity<Map<String, Object>> request = new HttpEntity<>(body, headers);
        ResponseEntity<String> response = restTemplate.postForEntity(submitURL, request, String.class);
        return response.getBody();
    }
}
