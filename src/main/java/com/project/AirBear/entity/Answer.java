package com.project.AirBear.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "answer")
public class Answer {
    @Id
    private Integer questionId;
    private String best_answer;

    public Answer() {}

    public Answer(Integer questionId, String best_answer) {
        this.questionId = questionId;
        this.best_answer = best_answer;
    }

    public Integer getQuestionId() { return questionId; }

    public void setQuestionId(Integer questionId) { this.questionId = questionId; }

    public String getBest_answer() { return best_answer; }

    public void setBest_answer(String best_answer) { this.best_answer = best_answer; }
}
