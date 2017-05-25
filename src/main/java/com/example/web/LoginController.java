package com.example.web;

import java.security.Principal;
import java.util.HashMap;
import java.util.Map;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

    @GetMapping("/user")
    public Map<String, String> getUser(Principal user, Authentication auth) {
        Map<String, String> userDetails = new HashMap<>();
        if (user != null) {
            userDetails.put("username", user.getName());
            if (auth.getAuthorities() != null) {
                for (GrantedAuthority ga : auth.getAuthorities()) {
                    if ("ROLE_2".equals(ga.getAuthority())) {
                        // Something to distinguish admin users
                        userDetails.put("userrole", "admin");
                    }
                }
            }
        }

        return userDetails;
    }

}
