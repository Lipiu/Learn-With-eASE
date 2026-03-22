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
    private final String SUBMIT_URL = "https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true";
    private final RestTemplate REST_TEMPLATE;
    private static final int JUDGE0_JAVA_LANGUAGE_ID = 62;
    private static final String API_HOST = "judge0-ce.p.rapidapi.com";

    public String runCode(String code){
        if(code == null || code.isBlank()){
            throw new IllegalArgumentException("Code cannot be empty");
        }
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("X-RapidAPI-Key", apiKey);
        headers.set("X-RapidAPI-Host", API_HOST);

        Map<String, Object> body = new HashMap<>();
        body.put("source_code", code);
        body.put("language_id", JUDGE0_JAVA_LANGUAGE_ID); //judge0 java ID

        HttpEntity<Map<String, Object>> request = new HttpEntity<>(body, headers);

        try {
            ResponseEntity<String> response = REST_TEMPLATE.postForEntity(SUBMIT_URL, request, String.class);

            if(!response.getStatusCode().is2xxSuccessful() || response.getBody() == null){
                throw new IllegalStateException("Judge0 API returned empty response");
            }
            return response.getBody();
        }
        catch (Exception e){
            throw new IllegalStateException("Failed to execute code via Judge0 API", e);
        }
    }
}