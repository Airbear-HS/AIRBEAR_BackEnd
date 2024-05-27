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
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

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

    @PostMapping("/upload")
    @Transactional
    public Map<String, String> uploadAudioFile(@RequestParam("file") MultipartFile file,
                                               @RequestParam("questionId") Integer questionId,
                                               @RequestParam("userId") String userId,
                                               @RequestParam("question") String question) {
        if (userId == null || userId.trim().isEmpty()) {
            throw new IllegalArgumentException("userId cannot be null or empty");
        }

        try {
            AudioFile audioFile = new AudioFile();
            audioFile.setDate(new Date());
            audioFile.setQuestionId(questionId);
            audioFile.setUserId(userId);
            audioFile.setQuestion(question);
            audioFile.setRecord(file.getBytes());

            audioFileRepository.save(audioFile);
            String audioUrl = "/api/download/" + audioFile.getId();
            return Collections.singletonMap("audioUrl", audioUrl);
        } catch (IOException e) {
            return Collections.singletonMap("error", "파일 업로드 실패: " + e.getMessage());
        }
    }

    @PostMapping("/community-posts/{postId}/comment")
    @Transactional
    public ResponseEntity<Void> addCommentToPost(@PathVariable Long postId, @RequestBody Map<String, String> commentMap) {
        String comment = commentMap.get("comment");
        CommunityPost post = communityPostRepository.findById(postId)
                .orElseThrow(() -> new RuntimeException("게시물을 찾을 수 없습니다. id: " + postId));

        if (post.getComment() == null || post.getComment().isEmpty()) {
            post.setComment(comment);
        } else {
            post.setComment(post.getComment() + "\n" + comment);
        }
        communityPostRepository.save(post);

        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/community-posts/{postId}/comment/{commentIndex}")
    @Transactional
    public ResponseEntity<Void> deleteCommentFromPost(@PathVariable Long postId, @PathVariable int commentIndex) {
        CommunityPost post = communityPostRepository.findById(postId)
                .orElseThrow(() -> new RuntimeException("게시물을 찾을 수 없습니다. id: " + postId));

        if (post.getComment() != null && !post.getComment().isEmpty()) {
            String[] comments = post.getComment().split("\n");
            List<String> commentList = new ArrayList<>(Arrays.asList(comments));
            if (commentIndex >= 0 && commentIndex < commentList.size()) {
                commentList.remove(commentIndex);
                post.setComment(String.join("\n", commentList));
                communityPostRepository.save(post);
            }
        }

        return ResponseEntity.ok().build();
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

    @DeleteMapping("/audio-files/{id}")
    public ResponseEntity<Void> deleteAudioFile(@PathVariable Long id) {
        AudioFile audioFile = audioFileRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("파일을 찾을 수 없습니다. id: " + id));
        audioFileRepository.delete(audioFile);
        return ResponseEntity.ok().build();
    }
}
