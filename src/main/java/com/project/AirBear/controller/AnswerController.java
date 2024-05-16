package com.project.AirBear.controller;
import com.project.AirBear.entity.Answer;
import com.project.AirBear.repository.AnswerRepository;
import com.project.AirBear.service.AnswerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("/api/answers")
public class AnswerController {

    @Autowired
    private AnswerRepository answerRepository;

    @GetMapping("/{questionId}")
    public List<Answer> getAnswersByQuestionId(@PathVariable Integer questionId) {
        return answerRepository.findByQuestionId(questionId);
    }
}