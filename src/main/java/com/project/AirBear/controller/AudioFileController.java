package com.project.AirBear.controller;

import com.project.AirBear.entity.AudioFile;
import com.project.AirBear.repository.AudioFileRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.*;

@RestController
@RequestMapping("/api")
public class AudioFileController {

    @Autowired
    private AudioFileRepository audioFileRepository;

    @PostMapping("/upload")
    @Transactional
    public Map<String, String> uploadAudioFile(@RequestParam("file") MultipartFile file, @RequestParam("questionId") Integer questionId, @RequestParam("userId") String userId) {
        if (userId == null || userId.trim().isEmpty()) {
            throw new IllegalArgumentException("userId cannot be null or empty");
        }

        try {
            AudioFile audioFile = new AudioFile();
            audioFile.setDate(new Date());
            audioFile.setQuestionId(questionId);
            audioFile.setUserId(userId);
            audioFile.setRecord(file.getBytes());

            audioFileRepository.save(audioFile);
            String audioUrl = "/api/download/" + audioFile.getId();
            return Collections.singletonMap("audioUrl", audioUrl);
        } catch (IOException e) {
            return Collections.singletonMap("error", "파일 업로드 실패: " + e.getMessage());
        }
    }

    @GetMapping("/download/{id}")
    public ResponseEntity<Resource> downloadAudioFile(@PathVariable Long id) {
        AudioFile audioFile = audioFileRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("파일을 찾을 수 없습니다. id: " + id));
        return ResponseEntity.ok()
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .body(new ByteArrayResource(audioFile.getRecord()));
    }
}
