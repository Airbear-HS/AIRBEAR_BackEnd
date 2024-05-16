package com.project.AirBear.service;

import com.project.AirBear.entity.Answer;
import com.project.AirBear.repository.AnswerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AnswerService {

    @Autowired
    private AnswerRepository answerRepository;

    public Answer findByQuestionId(Integer questionId) {
        return answerRepository.findById(questionId).orElse(null);
    }
}
