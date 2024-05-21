package com.project.AirBear.entity;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "community")
public class CommunityPost {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String userId;

    @Temporal(TemporalType.TIMESTAMP)
    private Date date;
    private String text;

    @ManyToOne
    @JoinColumn(name = "record_id")
    private AudioFile record;

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

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public AudioFile getRecord() {
        return record;
    }

    public void setRecord(AudioFile record) {
        this.record = record;
    }
}

