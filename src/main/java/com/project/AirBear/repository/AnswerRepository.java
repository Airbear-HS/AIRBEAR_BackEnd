package com.project.AirBear.repository;
import com.project.AirBear.entity.Answer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AnswerRepository extends JpaRepository<Answer, Integer> {
    List<Answer> findByQuestionId(Integer questionId);
    List<Answer> findByQuestionIdIn(List<Integer> questionIds);
}
