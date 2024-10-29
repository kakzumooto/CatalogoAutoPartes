package catalogoWebAutoPartes.Controller;

import catalogoWebAutoPartes.repositorio.AutoParteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PruebaConexionController {

    @Autowired
    private AutoParteRepository autoParteRepository;

    @GetMapping("/prueba-conexion")
    public String pruebaConexion() {
        long count = autoParteRepository.count();
        return "Conexión exitosa. Número de registros en AutoParte: " + count;
    }
}
