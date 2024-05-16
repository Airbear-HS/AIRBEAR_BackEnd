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
    private Integer major;
    private String question;

    public Question(){

    }
    public Question(Integer questionId, String language, Integer major, String question){
        this.questionId = questionId;
        this.language = language;
        this.major = major;
        this.question = question;
    }

    public Integer getQuestionId() { return questionId; }

    public void setQuestionId(Integer questionId) { this.questionId = questionId; }

    public String getLanguage() { return language; }

    public void setLanguage(String language) { this.language = language; }

    public Integer getMajor() { return major; }

    public void setMajor(Integer major) { this.major = major; }

    public String getQuestion() { return question; }

    public void setQuestion(String question) { this.question = question; }

}
