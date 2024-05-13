package com.project.AirBear.service;

import com.project.AirBear.entity.User;
import com.project.AirBear.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User validateUser(String userId, String password) {
        return userRepository.findByUserIdAndPassword(userId, password).orElse(null);
    }

    public User saveUser(User user) {
        return userRepository.save(user);
    }
}
