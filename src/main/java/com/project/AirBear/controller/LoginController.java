package com.project.AirBear.controller;

import com.project.AirBear.entity.User;
import com.project.AirBear.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class LoginController {
    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User loginRequest) {
        try {
            User user = userService.validateUser(loginRequest.getUserId(), loginRequest.getPassword());
            if (user != null) {
                // Include userId and userName in the response
                return ResponseEntity.ok("로그인 성공: " + user.getUserId() + ", " + user.getName());
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("로그인 실패: 사용자 정보가 올바르지 않습니다.");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("서버 오류");
        }
    }
}
