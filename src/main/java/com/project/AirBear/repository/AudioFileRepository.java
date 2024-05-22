package com.project.AirBear.repository;

import com.project.AirBear.entity.AudioFile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Date;
import java.util.List;

public interface AudioFileRepository extends JpaRepository<AudioFile, Long> {
    List<AudioFile> findByUserIdOrderByDateDesc(String userId);
    @Query("SELECT a FROM AudioFile a WHERE a.userId = :userId AND a.date >= :startDate AND a.date < :endDate")
    List<AudioFile> findByUserIdAndDateBetween(@Param("userId") String userId, @Param("startDate") Date startDate, @Param("endDate") Date endDate);
}