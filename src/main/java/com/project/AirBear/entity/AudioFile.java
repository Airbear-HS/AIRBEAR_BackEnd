package com.project.AirBear.entity;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "learning")
public class AudioFile {
    @Id
    private String userId;

    @Temporal(TemporalType.TIMESTAMP)
    private Date date;
    private Integer questionId;

    @Lob
    @Column(columnDefinition="LONGBLOB")
    private byte[] record;

    public AudioFile() {}

    public AudioFile(String userId, Date date, Integer questionId, byte[] record) {
        this.userId = userId;
        this.date = date;
        this.questionId = questionId;
        this.record = record;
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

    public byte[] getRecord() {
        return record;
    }

    public void setRecord(byte[] record) {
        this.record = record;
    }
}
