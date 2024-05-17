package com.project.AirBear.controller;

import com.project.AirBear.entity.Question;
import com.project.AirBear.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/interview")
public class InterviewController {

    @Autowired
    private QuestionRepository questionRepository;

    @PostMapping
    public List<Question> getQuestions(@RequestBody Map<String, List<Integer>> request) {
        List<Integer> questionIds = request.get("questionIds");
        return questionRepository.findAllById(questionIds);
    }
}
