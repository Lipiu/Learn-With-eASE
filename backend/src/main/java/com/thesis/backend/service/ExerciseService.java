package com.thesis.backend.service;

import com.thesis.backend.dtos.coding_exercise.ExerciseResponse;
import com.thesis.backend.dtos.coding_exercise.ExerciseSubmitResponse;
import com.thesis.backend.model.CodingExercise;
import com.thesis.backend.model.CodingExerciseResult;
import com.thesis.backend.model.User;
import com.thesis.backend.repository.CodingExerciseRepository;
import com.thesis.backend.repository.CodingExerciseResultRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ExerciseService {
    private final CodingExerciseRepository codingExerciseRepository;
    private final CodingExerciseResultRepository codingExerciseResultRepository;
    private final SandboxService sandboxService;

    public List<ExerciseResponse> getAllExercises(){
        return codingExerciseRepository.findAll()
                .stream()
                .map(this::toResponse)
                .toList();
    }

    public ExerciseResponse getExerciseById(Long id) {
        return toResponse(findExerciseById(id));
    }

    public ExerciseSubmitResponse submitExercise(Long exerciseId, String code, User user) {
        CodingExercise exercise = findExerciseById(exerciseId);
        String judgeResponse = sandboxService.runCode(code);
        ExerciseSubmitResponse response = checkOutput(judgeResponse, exercise.getExpectedOutput());
        saveResult(user, exercise, response.isPassed());
        return response;
    }

    private ExerciseSubmitResponse checkOutput(String judgeResponse, String expectedOutput) {
        if (judgeResponse == null) {
            return new ExerciseSubmitResponse(false, "No response from judge.");
        }

        // check for compilation error
        if (judgeResponse.contains("\"compile_output\":\"") ) {
            int start = judgeResponse.indexOf("\"compile_output\":\"") + 10;
            int end = judgeResponse.indexOf("\",", start);
            if (end > start) {
                String error = judgeResponse.substring(start, end).trim();
                if (!error.isEmpty()) {
                    return new ExerciseSubmitResponse(false, "Compilation error: " + error
                            .replace("\\n", "\n")
                            .replace("\\t", "\t"));
                }
            }
        }

        // check stdout
        if (!judgeResponse.contains("\"stdout\"")) {
            return new ExerciseSubmitResponse(false, "No output produced.");
        }

        int start = judgeResponse.indexOf("\"stdout\":\"") + 10;
        int end = judgeResponse.indexOf("\"", start);
        if (end <= start) {
            return new ExerciseSubmitResponse(false, "Could not read output.");
        }

        String actualOutput = judgeResponse.substring(start, end).trim();
        if (actualOutput.equals(expectedOutput.trim())) {
            return new ExerciseSubmitResponse(true, "Correct!");
        } else {
            return new ExerciseSubmitResponse(false, "Wrong answer. Expected: " + expectedOutput.trim() + " but got: " + actualOutput);
        }
    }

    private CodingExercise findExerciseById(Long id){
        return codingExerciseRepository.findById(id).orElseThrow(() -> new RuntimeException("Exercise not found!"));
    }

    private ExerciseResponse toResponse(CodingExercise exercise){
        return new ExerciseResponse(
                exercise.getId(),
                exercise.getTitle(),
                exercise.getDescription(),
                exercise.getStarterCode(),
                exercise.getSectionNumber()
        );
    }

    private void saveResult(User user, CodingExercise exercise, boolean passed) {
        CodingExerciseResult result = new CodingExerciseResult();
        result.setUser(user);
        result.setCodingExercise(exercise);
        result.setPassed(passed);
        result.setCreatedAt(LocalDateTime.now());
        codingExerciseResultRepository.save(result);
    }
}
