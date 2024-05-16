package com.project.AirBear.service;

import com.project.AirBear.entity.Question;
import com.project.AirBear.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class QuestionService {

    @Autowired
    private QuestionRepository questionRepository;

    public Optional<Question> getQuestionById(Integer questionId) {
        return questionRepository.findById(questionId);
    }
}
