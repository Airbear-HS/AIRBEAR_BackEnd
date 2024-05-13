package com.project.AirBear.controller;

import com.project.AirBear.entity.User;
import com.project.AirBear.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class LoginController {
    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User loginRequest) {
        User user = userService.validateUser(loginRequest.getUserId(), loginRequest.getPassword());
        if (user != null) {
            // 로그인 성공 시 사용자 ID를 포함하는 응답 반환
            return ResponseEntity.ok("로그인 성공: " + user.getUserId());
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("로그인 실패");
        }
    }
}
