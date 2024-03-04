package mx.unam.com.cfdi_back;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@SpringBootApplication
public class CfdiBackApplication {

    public static void main(String[] args) {
        SpringApplication.run(CfdiBackApplication.class, args);
    }

    @GetMapping("/hola")
    public String DecirHola(@RequestParam(value = "miNombre", defaultValue = "Mundo") String nombre) {
        System.out.println("Hola");
        return String.format("Hola %s!", nombre);
    }


}
