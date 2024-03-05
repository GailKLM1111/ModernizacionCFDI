package mx.unam.com.cfdi_back;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.rmi.ServerException;
import java.util.HashMap;

@SpringBootApplication
@RestController
public class CfdiBackApplication {

    public static void main(String[] args) {
        SpringApplication.run(CfdiBackApplication.class, args);
    }

    @CrossOrigin
    @GetMapping("/hola")
    public HashMap<String, Object> DecirHola(@RequestParam(value = "miNombre", defaultValue = "Mundo") String nombre ) {
        System.out.println("Hola " + nombre);
        HashMap<String, Object> map = new HashMap<>();
        map.put("nombre", nombre);
        return map;
    }


//    @PostMapping(path = "users",
//            consumes = MediaType.APPLICATION_JSON_VALUE,
//            produces = MediaType.APPLICATION_JSON_VALUE)
//    public ResponseEntity<User> create(@RequestBody User newUser) {
//
//        User user = userService.save(newUser);
//        if (user == null) {
//            throw new ServerException();
//        } else {
//            return new ResponseEntity<>(user, HttpStatus.CREATED);
//        }
//    }

}
