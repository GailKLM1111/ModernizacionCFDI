package mx.unam.com.cfdi_back;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class prueba {

    @CrossOrigin
    @GetMapping("/hola")
    public String hola() {
        return "Hola Mundo";
    }

}
