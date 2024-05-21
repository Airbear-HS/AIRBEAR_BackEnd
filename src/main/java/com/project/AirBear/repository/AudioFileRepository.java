package com.project.AirBear.repository;

import com.project.AirBear.entity.AudioFile;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AudioFileRepository extends JpaRepository<AudioFile, Long> {
    List<AudioFile> findByUserIdOrderByDateDesc(String userId);
}