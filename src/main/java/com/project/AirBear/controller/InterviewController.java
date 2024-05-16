package com.project.AirBear.controller;

import com.project.AirBear.entity.Question;
import com.project.AirBear.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/interview")
public class InterviewController {

    @Autowired
    private QuestionRepository questionRepository;

    @GetMapping("/{questionId}")
    public Question getQuestion(@PathVariable Integer questionId) {
        return questionRepository.findById(questionId).orElse(null);
    }
}
