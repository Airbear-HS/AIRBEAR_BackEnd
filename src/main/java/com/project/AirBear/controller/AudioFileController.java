package com.project.AirBear.controller;

import com.project.AirBear.entity.AudioFile;
import com.project.AirBear.entity.CommunityPost;
import com.project.AirBear.repository.AudioFileRepository;
import com.project.AirBear.repository.CommunityPostRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api")
public class AudioFileController {

    @Autowired
    private AudioFileRepository audioFileRepository;
    @Autowired
    private CommunityPostRepository communityPostRepository;

    @GetMapping("/audio-files/{userId}")
    public List<AudioFile> getAudioFilesByUserId(@PathVariable String userId) {
        return audioFileRepository.findByUserIdOrderByDateDesc(userId);
    }

    @PostMapping("/community-posts")
    @Transactional
    public ResponseEntity<CommunityPost> createCommunityPost(@RequestBody CommunityPost communityPost) {
        CommunityPost savedPost = communityPostRepository.save(communityPost);
        return ResponseEntity.ok(savedPost);
    }

    @GetMapping("/community-posts")
    public List<CommunityPost> getCommunityPosts() {
        return communityPostRepository.findAll();
    }

    @GetMapping("/audio-files/{userId}/{date}")
    public ResponseEntity<List<AudioFile>> getAudioFilesByUserIdAndDate(
            @PathVariable String userId,
            @PathVariable String date) {
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
        try {
            Date parsedDate = formatter.parse(date);
            Calendar calendar = Calendar.getInstance();
            calendar.setTime(parsedDate);
            calendar.add(Calendar.DAY_OF_MONTH, 1);
            Date nextDay = calendar.getTime();

            List<AudioFile> audioFiles = audioFileRepository.findByUserIdAndDateBetween(userId, parsedDate, nextDay);
            return ResponseEntity.ok(audioFiles);
        } catch (ParseException e) {
            return ResponseEntity.badRequest().build();
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
