package com.project.AirBear.entity;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "learning")
public class AudioFile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String userId;

    @Temporal(TemporalType.TIMESTAMP)
    private Date date;
    private Integer questionId;
    private String question;

    @Lob
    @Column(columnDefinition="LONGBLOB")
    private byte[] record;

    public AudioFile() {}

    public AudioFile(String userId, Date date, Integer questionId, String question, byte[] record) {
        this.userId = userId;
        this.date = date;
        this.questionId = questionId;
        this.question = question;
        this.record = record;
    }

    // Getter와 Setter 메서드들
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Integer getQuestionId() {
        return questionId;
    }

    public void setQuestionId(Integer questionId) {
        this.questionId = questionId;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public byte[] getRecord() {
        return record;
    }

    public void setRecord(byte[] record) {
        this.record = record;
    }
}

