package com.project.AirBear.controller;
import com.project.AirBear.entity.Answer;
import com.project.AirBear.repository.AnswerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/api/answers")
public class AnswerController {

    @Autowired
    private AnswerRepository answerRepository;

    @GetMapping("/{questionId}")
    public List<Answer> getAnswersByQuestionId(@PathVariable Integer questionId) {
        return answerRepository.findByQuestionId(questionId);
    }

    @PostMapping("/batch")
    public List<Answer> getAnswersByQuestionIds(@RequestBody Map<String, List<Integer>> request) {
        List<Integer> questionIds = request.get("questionIds");
        return answerRepository.findByQuestionIdIn(questionIds);
    }
}
