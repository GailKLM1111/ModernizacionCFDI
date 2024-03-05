package com.example.demo;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@RestController
@RequestMapping("/api")
public class prueba {

    @CrossOrigin
    @GetMapping("/hola")
    public HashMap<String,String> hola() {
        HashMap<String,String> response = new HashMap<>();
        response.put("mensaje", "Hola Mundo");
        return response;
    }

}
