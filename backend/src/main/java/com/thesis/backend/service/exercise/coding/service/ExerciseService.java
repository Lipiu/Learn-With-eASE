package com.thesis.backend.service.exercise.coding.service;

import com.thesis.backend.dtos.coding_exercise.ExerciseResponse;
import com.thesis.backend.dtos.coding_exercise.ExerciseSubmitResponse;
import com.thesis.backend.model.coding.exercise.CodingExercise;
import com.thesis.backend.model.coding.exercise.CodingExerciseResult;
import com.thesis.backend.model.user.User;
import com.thesis.backend.repository.coding.CodingExerciseRepository;
import com.thesis.backend.repository.coding.CodingExerciseResultRepository;
import com.thesis.backend.service.sandbox.SandboxService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import tools.jackson.databind.JsonNode;
import tools.jackson.databind.ObjectMapper;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ExerciseService {
    private final CodingExerciseRepository codingExerciseRepository;
    private final CodingExerciseResultRepository codingExerciseResultRepository;
    private final SandboxService sandboxService;
    private final ObjectMapper objectMapper = new ObjectMapper();

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

    private ExerciseSubmitResponse checkOutput(String judgeResponse, String expectedOutput){
        if(judgeResponse == null){
            return new ExerciseSubmitResponse(false, "No response from judge");
        }

        try{
            //convert JSON strings into Java objects (basically acts as a JSON parser)

            JsonNode root = objectMapper.readTree(judgeResponse); // parse the JSON string into a tree structure (root is the entire json object)

            JsonNode compileOutput = root.get("compile_output");
            if(compileOutput != null && !compileOutput.isNull()){
                String error = compileOutput.asString().trim();
                if(!error.isEmpty()){
                    return new ExerciseSubmitResponse(false, "Compilation error:\n" + error);
                }
            }
            JsonNode stdout = root.get("stdout");
            if(stdout == null || stdout.isNull()){
                return new ExerciseSubmitResponse(false, "No output produced.");
            }

            String actualOutput = stdout.asString().trim();
            String normalizedExpected = expectedOutput.trim();

            if(actualOutput.equals(normalizedExpected)){
                return new ExerciseSubmitResponse(true, "Correct!");
            }
            else{
                return new ExerciseSubmitResponse(false, "Wrong answer. Expected:\n" + normalizedExpected + "\nGot:\n" + actualOutput);
            }
        }
        catch(Exception e){
            return new ExerciseSubmitResponse(false, "Error parsing judge response: " + e.getMessage());
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

    public List<Long> getSolvedExerciseIds(User user){
        return codingExerciseResultRepository.findByUser(user)
                .stream()
                .filter(CodingExerciseResult::isPassed)
                .map(result -> result.getCodingExercise().getId())
                .distinct()
                .toList();
    }

    public List<ExerciseResponse> getSolvedExerciseDetails(User user){
        return codingExerciseResultRepository.findByUser(user)
                .stream()
                .filter(CodingExerciseResult::isPassed)
                .map(result -> toResponse(result.getCodingExercise()))
                .distinct()
                .toList();
    }
}
