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
    public Map<String, String> uploadAudioFile(@RequestParam("file") MultipartFile file, @RequestParam("questionId") Integer questionId, @RequestParam("userId") String userId) { // userId를 추가로 받습니다.
        try {
            AudioFile audioFile = new AudioFile();
            audioFile.setDate(new Date());
            audioFile.setQuestionId(questionId);
            audioFile.setUserId(userId); // userId를 설정합니다.
            audioFile.setRecord(file.getBytes());

            audioFileRepository.save(audioFile);
            String audioUrl = "/api/download/" + audioFile.getUserId();
            return Collections.singletonMap("audioUrl", audioUrl);
        } catch (IOException e) {
            return Collections.singletonMap("error", "파일 업로드 실패: " + e.getMessage());
        }
    }

    @GetMapping("/download/{userId}")
    public ResponseEntity<Resource> downloadAudioFile(@PathVariable String userId) {
        AudioFile audioFile = audioFileRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("파일을 찾을 수 없습니다. userId: " + userId));
        return ResponseEntity.ok()
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .body(new ByteArrayResource(audioFile.getRecord()));
    }
}
