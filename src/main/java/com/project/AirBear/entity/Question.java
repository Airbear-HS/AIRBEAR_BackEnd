package com.project.AirBear.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "interview")
public class Question {
    @Id
    private Integer questionId;
    private String language;
    private String question;

    public Question(){

    }
    public Question(Integer questionId, String language, String question){
        this.questionId = questionId;
        this.language = language;
        this.question = question;
    }

    public Integer getQuestionId() { return questionId; }

    public void setQuestionId(Integer questionId) { this.questionId = questionId; }

    public String getLanguage() { return language; }

    public void setLanguage(String language) { this.language = language; }

    public String getQuestion() { return question; }

    public void setQuestion(String question) { this.question = question; }

}
